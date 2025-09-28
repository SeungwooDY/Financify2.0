"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { 
  Calendar,
  Clock,
  Home,
  Building2
} from "lucide-react"
import { useTransactionFilters } from "@/lib/hooks"

interface QuickFiltersProps {
  className?: string
}

const FILTER_GROUPS = [
  {
    label: "Time",
    filters: [
      { id: "weekday", label: "Weekday", icon: Calendar },
      { id: "weekend", label: "Weekend", icon: Clock },
    ]
  },
  {
    label: "Location",
    filters: [
      { id: "on-campus", label: "On-campus", icon: Home },
      { id: "off-campus", label: "Off-campus", icon: Building2 },
    ]
  }
]

export function QuickFilters({ className }: QuickFiltersProps) {
  const { filters, toggleTimeFilter, toggleLocationFilter } = useTransactionFilters()

  const toggleFilter = (filterId: string, filterType: 'time' | 'location') => {
    if (filterType === 'time') {
      toggleTimeFilter(filterId)
    } else {
      toggleLocationFilter(filterId)
    }
  }

  return (
    <Card className={`card-glass h-full ${className}`}>
      <CardContent className="p-8">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text mb-2">Quick Filters</h3>
            <p className="text-text-secondary text-sm">Focus on specific patterns</p>
          </div>
          
          <div className="space-y-6">
            {FILTER_GROUPS.map((group) => (
              <div key={group.label}>
                <h4 className="text-sm font-medium text-text-tertiary mb-3 uppercase tracking-wide">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.filters.map((filter) => {
                    const Icon = filter.icon
                    const filterType = group.label === 'Time' ? 'time' : 'location'
                    const isSelected = filterType === 'time' 
                      ? filters.timeFilters.includes(filter.id)
                      : filters.locationFilters.includes(filter.id)
                    
                    return (
                      <Button
                        key={filter.id}
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleFilter(filter.id, filterType)}
                        className={`
                          text-xs font-medium transition-all duration-200
                          ${isSelected 
                            ? 'bg-accent-1 text-white shadow-md hover:bg-accent-1/90 hover:shadow-lg hover:-translate-y-0.5' 
                            : 'border-white/20 text-text-secondary hover:border-accent-1/50 hover:text-accent-1 hover:bg-accent-1/5'
                          }
                        `}
                      >
                        <Icon className="w-3 h-3 mr-1.5" />
                        {filter.label}
                      </Button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtle gradient ribbon */}
          <div className="mt-8 h-1 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 rounded-full opacity-60"></div>
        </div>
      </CardContent>
    </Card>
  )
}
