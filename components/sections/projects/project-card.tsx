import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <Card
            className={cn(
                "cursor-pointer hover:shadow-lg transition-shadow relative",
                project.starred && [
                    "border-2 border-transparent",
                    "before:absolute before:inset-[-2px] before:rounded-xl before:animate-shimmer",
                    "before:bg-[length:200%_100%]",
                    "before:bg-gradient-to-r before:from-yellow-600 before:via-yellow-300 before:to-yellow-600",
                    "after:absolute after:inset-[-2px] after:rounded-[10px] after:bg-background",
                    "after:m-[2px]"
                ]
            )}
            onClick={onClick}
        >
            <CardContent className="p-6 space-y-4 relative z-10">
                <div className="flex gap-4">
                    {project.images?.[0] && (
                        <div className="relative h-32 w-32 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                            />
                        </div>
                    )}
                    <div className="flex-grow">
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <span className="text-sm text-end text-muted-foreground">{project.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
                {project.starred && (
                    <div className="absolute bottom-3 right-3">
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 