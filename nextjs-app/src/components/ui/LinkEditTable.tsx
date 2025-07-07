'use client'

import { useState, useEffect } from 'react'
import { collection, onSnapshot, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface LinkData {
  id: string
  url: string
  ogpUrl?: string
  title?: string
  description?: string
  id_link: string
}

export default function LinkEditTable() {
  const [links, setLinks] = useState<LinkData[]>([])
  const [editDialog, setEditDialog] = useState(false)
  const [createDialog, setCreateDialog] = useState(false)
  const [editData, setEditData] = useState<LinkData | null>(null)
  const [newData, setNewData] = useState<Partial<LinkData>>({})
  const [createLoading, setCreateLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!db) {
      return
    }

    const unsubscribe = onSnapshot(collection(db, 'Link'), (querySnapshot) => {
      const linksData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        id_link: `https://yama-code.dev/${doc.id}`,
        ...doc.data()
      })) as LinkData[]
      setLinks(linksData)
    })

    return () => unsubscribe()
  }, [])

  const editLink = (link: LinkData) => {
    setEditData({ ...link })
    setEditDialog(true)
  }

  const updateLink = async () => {
    if (!editData || !db) return

    try {
      const updatePayload: Partial<LinkData> = { url: editData.url }
      
      if (editData.ogpUrl && editData.title && editData.description) {
        updatePayload.ogpUrl = editData.ogpUrl
        updatePayload.title = editData.title
        updatePayload.description = editData.description
      }

      await updateDoc(doc(db, 'Link', editData.id), updatePayload)
      setEditDialog(false)
    } catch (error) {
      console.error('Error updating link:', error)
    }
  }

  const deleteLink = async (id: string) => {
    if (!db) return

    try {
      await deleteDoc(doc(db, 'Link', id))
    } catch (error) {
      console.error('Error deleting link:', error)
    }
  }

  const createNewLink = () => {
    setNewData({})
    setCreateDialog(true)
  }

  const createLink = async () => {
    if (!newData.id || !newData.url) {
      setErrorMessage('ID and URL are required')
      return
    }

    if (!db) {
      setErrorMessage('Database not available')
      return
    }

    setCreateLoading(true)
    setErrorMessage('')

    try {
      const createPayload: Partial<LinkData> = { url: newData.url }
      
      if (newData.ogpUrl && newData.title && newData.description) {
        createPayload.ogpUrl = newData.ogpUrl
        createPayload.title = newData.title
        createPayload.description = newData.description
      }

      await setDoc(doc(db, 'Link', newData.id), createPayload)
      setCreateDialog(false)
    } catch (error) {
      console.error('Error creating link:', error)
      setErrorMessage('Link creation failed')
    } finally {
      setCreateLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={createNewLink}>
        Create New Link
      </Button>

      {/* Create Dialog */}
      {createDialog && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="new-id">ID</Label>
              <Input
                id="new-id"
                value={newData.id || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewData({ ...newData, id: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="new-url">URL</Label>
              <Input
                id="new-url"
                value={newData.url || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewData({ ...newData, url: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="new-ogp-url">OGP URL</Label>
              <Input
                id="new-ogp-url"
                value={newData.ogpUrl || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewData({ ...newData, ogpUrl: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="new-title">Title</Label>
              <Input
                id="new-title"
                value={newData.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewData({ ...newData, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="new-description">Description</Label>
              <Input
                id="new-description"
                value={newData.description || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewData({ ...newData, description: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={createLink} disabled={createLoading}>
                {createLoading ? 'Creating...' : 'Create'}
              </Button>
              <Button variant="outline" onClick={() => setCreateDialog(false)}>
                Cancel
              </Button>
            </div>
            {errorMessage && (
              <p className="text-sm text-destructive">{errorMessage}</p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Edit Dialog */}
      {editDialog && editData && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>ID</Label>
              <a
                href={editData.id_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline"
              >
                {editData.id}
              </a>
            </div>
            <div>
              <Label htmlFor="edit-url">URL</Label>
              <Input
                id="edit-url"
                value={editData.url || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditData({ ...editData, url: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="edit-ogp-url">OGP URL</Label>
              <Input
                id="edit-ogp-url"
                value={editData.ogpUrl || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditData({ ...editData, ogpUrl: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                value={editData.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditData({ ...editData, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="edit-description">Description</Label>
              <Input
                id="edit-description"
                value={editData.description || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditData({ ...editData, description: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={updateLink}>
                Update
              </Button>
              <Button variant="outline" onClick={() => setEditDialog(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Links Table */}
      <Card>
        <CardHeader>
          <CardTitle>Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">URL</th>
                  <th className="border border-gray-300 p-2">Title</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.id}>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={link.id_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {link.id}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2 break-all">
                      {link.url}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {link.title || '-'}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => editLink(link)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteLink(link.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}