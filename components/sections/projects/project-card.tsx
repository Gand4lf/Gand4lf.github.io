import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={onClick}
        >
            <CardContent className="p-6 space-y-4">
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
            </CardContent>
        </Card>
    )
} 