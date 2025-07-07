'use client'

import { useEffect, useRef, useState } from 'react'

interface BudouXProps {
  children: string
  className?: string
}

export default function BudouX({ children, className }: BudouXProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [processedHtml, setProcessedHtml] = useState(children)

  useEffect(() => {
    // クライアントサイドでのみbudouxを読み込み
    if (typeof window !== 'undefined') {
      import('budoux').then(({ loadDefaultJapaneseParser }) => {
        if (elementRef.current && children) {
          const parser = loadDefaultJapaneseParser()
          const processed = parser.translateHTMLString(children)
          setProcessedHtml(processed)
        }
      }).catch((error) => {
        console.warn('BudouX loading failed:', error)
        setProcessedHtml(children)
      })
    }
  }, [children])

  return (
    <div 
      ref={elementRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  )
}