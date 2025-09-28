"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export type BudgetMode = 'budget' | 'maintain'

export function useBudgetMode() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mode, setMode] = useState<BudgetMode>('budget')
  
  useEffect(() => {
    const modeParam = searchParams.get('mode')
    if (modeParam === 'budget' || modeParam === 'maintain') {
      setMode(modeParam)
    }
  }, [searchParams])
  
  const updateMode = (newMode: BudgetMode) => {
    setMode(newMode)
    
    const params = new URLSearchParams(searchParams.toString())
    params.set('mode', newMode)
    
    router.push(`/budget?${params.toString()}`, { scroll: false })
  }
  
  return {
    mode,
    updateMode
  }
}
