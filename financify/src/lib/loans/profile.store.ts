"use client"

import { useState, useEffect } from "react"
import { StudentProfile } from "./types"

const STORAGE_KEY = "financify_student_profile"

export function useStudentProfile() {
  const [profile, setProfileState] = useState<StudentProfile | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setProfileState(parsed)
      }
    } catch (error) {
      console.warn("Failed to load student profile from localStorage:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save to localStorage when profile changes
  const setProfile = (newProfile: StudentProfile | null) => {
    setProfileState(newProfile)
    try {
      if (newProfile) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (error) {
      console.warn("Failed to save student profile to localStorage:", error)
    }
  }

  return {
    profile,
    setProfile,
    isLoaded
  }
}
