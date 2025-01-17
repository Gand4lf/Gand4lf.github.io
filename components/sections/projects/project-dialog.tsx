import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ImageNavigation } from "./image-navigation"

interface ProjectDialogProps {
    project: Project | null
    onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <Dialog open={!!project} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl">
                {project && (
                    <>
                        <div className="flex gap-6">
                            {project.images && project.images.length > 0 && (
                                <div className="relative group">
                                    <div className="relative h-64 w-64 flex-shrink-0 rounded-lg overflow-hidden">
                                        <Image
                                            src={project.images[currentImageIndex]}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                        />
                                        {project.images.length > 1 && (
                                            <>
                                                <ImageNavigation
                                                    onPrevious={() => setCurrentImageIndex((prev) =>
                                                        prev === 0 ? project.images!.length - 1 : prev - 1
                                                    )}
                                                    onNext={() => setCurrentImageIndex((prev) =>
                                                        prev === project.images!.length - 1 ? 0 : prev + 1
                                                    )}
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="flex-grow space-y-4">
                                <DialogHeader className="space-y-1">
                                    <DialogTitle>{project.title}</DialogTitle>
                                    <span className="text-sm text-muted-foreground">{project.date}</span>
                                </DialogHeader>
                                <DialogDescription>
                                    <p>{project.longDescription || project.description}</p>
                                </DialogDescription>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                        {project.link && (
                            <Button variant="outline" asChild className="mt-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    View Project
                                </a>
                            </Button>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
} 