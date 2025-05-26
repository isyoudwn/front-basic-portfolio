import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  demoLink?: string
}

export default function ProjectCard({ title, description, tags, link, demoLink }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-gray-500 transition-all duration-300 h-full flex flex-col">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-xl text-white line-clamp-2 min-h-[3.5rem]">{title}</CardTitle>
        <CardDescription className="text-gray-400 line-clamp-3 min-h-[4.5rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-200 hover:bg-gray-600 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-shrink-0 pt-4">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          <Github className="h-4 w-4 mr-1" />
          GitHub
        </Link>
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Live Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
