"use client"

import { useState } from "react"
import { StudentProfile } from "@/lib/loans/types"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Checkbox } from "@/components/ui/Checkbox"
import { X } from "lucide-react"

interface ProfileSheetProps {
  isOpen: boolean
  onClose: () => void
  onSave: (profile: StudentProfile) => void
  initialProfile?: StudentProfile | null
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"
]

export function ProfileSheet({ isOpen, onClose, onSave, initialProfile }: ProfileSheetProps) {
  const [profile, setProfile] = useState<StudentProfile>({
    school: initialProfile?.school || "",
    college_state: initialProfile?.college_state || "",
    class_year: initialProfile?.class_year || new Date().getFullYear() + 1,
    major: initialProfile?.major || "",
    gpa: initialProfile?.gpa || undefined,
    enrollment: initialProfile?.enrollment || "full_time",
    residency: initialProfile?.residency || "us_citizen",
    dependency_status: initialProfile?.dependency_status || "dependent",
    household_income_band: initialProfile?.household_income_band || undefined,
    first_gen: initialProfile?.first_gen || false,
    consent_need_based: initialProfile?.consent_need_based || false
  })

  const handleSave = () => {
    onSave(profile)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-balance">Student Profile</CardTitle>
            <CardDescription className="text-pretty">
              Help us recommend the best loan options for your situation
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* School Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">School Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">School Name</label>
                <Input
                  value={profile.school || ""}
                  onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                  placeholder="University of California"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">State</label>
                <select
                  value={profile.college_state || ""}
                  onChange={(e) => setProfile({ ...profile, college_state: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select state</option>
                  {US_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Class Year</label>
                <Input
                  type="number"
                  value={profile.class_year || ""}
                  onChange={(e) => setProfile({ ...profile, class_year: parseInt(e.target.value) })}
                  placeholder="2025"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Major (Optional)</label>
                <Input
                  value={profile.major || ""}
                  onChange={(e) => setProfile({ ...profile, major: e.target.value })}
                  placeholder="Computer Science"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">GPA (Optional)</label>
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  value={profile.gpa || ""}
                  onChange={(e) => setProfile({ ...profile, gpa: parseFloat(e.target.value) })}
                  placeholder="3.5"
                />
              </div>
            </div>
          </div>

          {/* Enrollment Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enrollment Status</h3>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="enrollment"
                  value="full_time"
                  checked={profile.enrollment === "full_time"}
                  onChange={(e) => setProfile({ ...profile, enrollment: e.target.value as "full_time" | "part_time" })}
                />
                <span>Full-time student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="enrollment"
                  value="part_time"
                  checked={profile.enrollment === "part_time"}
                  onChange={(e) => setProfile({ ...profile, enrollment: e.target.value as "full_time" | "part_time" })}
                />
                <span>Part-time student</span>
              </label>
            </div>
          </div>

          {/* Residency Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Residency Status</h3>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="residency"
                  value="us_citizen"
                  checked={profile.residency === "us_citizen"}
                  onChange={(e) => setProfile({ ...profile, residency: e.target.value as "us_citizen" | "permanent_resident" | "intl" })}
                />
                <span>U.S. Citizen</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="residency"
                  value="permanent_resident"
                  checked={profile.residency === "permanent_resident"}
                  onChange={(e) => setProfile({ ...profile, residency: e.target.value as "us_citizen" | "permanent_resident" | "intl" })}
                />
                <span>Permanent Resident</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="residency"
                  value="intl"
                  checked={profile.residency === "intl"}
                  onChange={(e) => setProfile({ ...profile, residency: e.target.value as "us_citizen" | "permanent_resident" | "intl" })}
                />
                <span>International Student</span>
              </label>
            </div>
          </div>

          {/* Dependency Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dependency Status</h3>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="dependency"
                  value="dependent"
                  checked={profile.dependency_status === "dependent"}
                  onChange={(e) => setProfile({ ...profile, dependency_status: e.target.value as "dependent" | "independent" })}
                />
                <span>Dependent student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="dependency"
                  value="independent"
                  checked={profile.dependency_status === "independent"}
                  onChange={(e) => setProfile({ ...profile, dependency_status: e.target.value as "dependent" | "independent" })}
                />
                <span>Independent student</span>
              </label>
            </div>
          </div>

          {/* Financial Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Financial Information</h3>
            
            <div>
              <label className="text-sm font-medium">Household Income Band (Optional)</label>
              <select
                value={profile.household_income_band || ""}
                onChange={(e) => setProfile({ ...profile, household_income_band: e.target.value as any })}
                className="w-full px-3 py-2 border border-input rounded-md bg-background mt-1"
              >
                <option value="">Prefer not to say</option>
                <option value="lt_30k">Less than $30,000</option>
                <option value="30_60k">$30,000 - $60,000</option>
                <option value="60_100k">$60,000 - $100,000</option>
                <option value="gt_100k">More than $100,000</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="first_gen"
                checked={profile.first_gen || false}
                onCheckedChange={(checked) => setProfile({ ...profile, first_gen: !!checked })}
              />
              <label htmlFor="first_gen" className="text-sm">
                First-generation college student
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent_need_based"
                checked={profile.consent_need_based || false}
                onCheckedChange={(checked) => setProfile({ ...profile, consent_need_based: !!checked })}
              />
              <label htmlFor="consent_need_based" className="text-sm">
                I consent to use my financial information for need-based loan recommendations
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
