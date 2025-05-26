import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  link: string
}

export default function BlogPostCard({ title, excerpt, date, link }: BlogPostCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-gray-500 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read More <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  )
}
