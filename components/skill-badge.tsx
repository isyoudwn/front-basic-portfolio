import type { ReactNode } from "react"

interface SkillBadgeProps {
  icon: ReactNode
  label: string
}

export default function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <div className="flex items-center bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
