"use client"

import { useEffect, useRef } from "react"

interface UseTabOrderOptions {
  containerRef: React.RefObject<HTMLElement>
  enabled?: boolean
}

export function useTabOrder({ containerRef, enabled = true }: UseTabOrderOptions) {
  const focusableElements = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    const container = containerRef.current
    
    // Get all focusable elements in logical tab order
    const focusableSelectors = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="tab"]',
      '[role="option"]'
    ].join(', ')

    const elements = Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[]
    
    // Sort by tab index and DOM order
    elements.sort((a, b) => {
      const aTabIndex = parseInt(a.getAttribute('tabindex') || '0', 10)
      const bTabIndex = parseInt(b.getAttribute('tabindex') || '0', 10)
      
      if (aTabIndex !== bTabIndex) {
        return aTabIndex - bTabIndex
      }
      
      return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    })

    focusableElements.current = elements

    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const currentIndex = focusableElements.current.indexOf(e.target as HTMLElement)
      if (currentIndex === -1) return

      if (e.shiftKey) {
        // Shift + Tab: go to previous element
        e.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.current.length - 1
        focusableElements.current[prevIndex]?.focus()
      } else {
        // Tab: go to next element
        e.preventDefault()
        const nextIndex = currentIndex < focusableElements.current.length - 1 ? currentIndex + 1 : 0
        focusableElements.current[nextIndex]?.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [enabled, containerRef])

  return {
    focusableElements: focusableElements.current,
    focusNext: () => {
      const current = document.activeElement as HTMLElement
      const currentIndex = focusableElements.current.indexOf(current)
      const nextIndex = currentIndex < focusableElements.current.length - 1 ? currentIndex + 1 : 0
      focusableElements.current[nextIndex]?.focus()
    },
    focusPrevious: () => {
      const current = document.activeElement as HTMLElement
      const currentIndex = focusableElements.current.indexOf(current)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.current.length - 1
      focusableElements.current[prevIndex]?.focus()
    }
  }
}
