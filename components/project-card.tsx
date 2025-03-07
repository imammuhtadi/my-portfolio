'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface ProjectCardProps {
  id: string
  image: string
  title: string
  description: string
  playStoreUrl?: string
  appStoreUrl?: string
}

export default function ProjectCard({
  id,
  image,
  title,
  description,
  playStoreUrl,
  appStoreUrl,
}: ProjectCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/projects/${id}`)
  }

  const handleStoreClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation() // Prevent card click when clicking store links
  }

  return (
    <Card className="overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer" onClick={handleClick}>
      <CardHeader className="p-0">
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="aspect-video object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div className="flex space-x-2">
          {playStoreUrl && (
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => handleStoreClick(e, playStoreUrl)}
            >
              <Button size="sm" variant="outline">
                Play Store
              </Button>
            </Link>
          )}
          {appStoreUrl && (
            <Link
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => handleStoreClick(e, appStoreUrl)}
            >
              <Button size="sm" variant="outline">
                App Store
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
