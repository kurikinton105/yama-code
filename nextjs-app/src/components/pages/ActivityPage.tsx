'use client'

import { useState, useEffect } from 'react'
import { fetchActivities, ActivityItem } from '@/lib/api'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from '@/components/ui/timeline'
import BudouX from '@/components/ui/BudouX'
import { Calendar, Activity, Code, GitBranch } from 'lucide-react'

// アイコンマッピング
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code className="h-4 w-4" />
    case 'git':
    case 'github':
      return <GitBranch className="h-4 w-4" />
    case 'activity':
      return <Activity className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

export default function ActivityPage() {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetchActivities()
        setActivities(response.data)
      } catch (error) {
        console.error('Failed to load activities:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadActivities()
  }, [])

  if (isLoading) {
    return (
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Activity Record</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Activity Record</h2>
      
      <div className="max-w-4xl mx-auto">
        <Timeline>
          {activities.map((activity, index) => (
            <div key={index} className="relative">
              <TimelineItem side={activity.side as 'left' | 'right'}>
                <TimelineIcon>
                  {getIcon(activity.icon)}
                </TimelineIcon>
                <TimelineContent>
                  <TimelineTitle>{activity.name}</TimelineTitle>
                  <TimelineDescription className="mb-2">
                    {activity.date_info}
                  </TimelineDescription>
                  <BudouX 
                    className="text-sm text-foreground prose prose-sm max-w-none"
                  >
                    {activity.infomation}
                  </BudouX>
                </TimelineContent>
              </TimelineItem>
              {index < activities.length - 1 && (
                <TimelineConnector className={activity.side === 'right' ? 'right-4 left-auto' : ''} />
              )}
            </div>
          ))}
        </Timeline>
      </div>
    </div>
  )
}