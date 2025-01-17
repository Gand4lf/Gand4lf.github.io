"use client"
import { Separator } from "@/components/ui/separator"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { ProjectCard } from "@/components/sections/projects/project-card"
import { ProjectDialog } from "@/components/sections/projects/project-dialog"
import { Contact } from "@/components/sections/contact"
import { useState } from "react"
import { Project } from "@/types"
import { projects, websiteDesigns } from "@/data"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const PROJECTS_PER_PAGE = 6
    const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE)

    return (
        <main className="relative min-h-screen p-8 md:p-24 bg-background/95 backdrop-blur-sm">
            <div className="fixed top-8 right-8 z-50">
                <ThemeToggle />
            </div>
            <Hero />
            <Separator className="my-8" />
            <About />
            <Separator className="my-8" />

            {/* Projects Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, visibleProjects).map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
                {visibleProjects < projects.length && (
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setVisibleProjects(prev => prev + PROJECTS_PER_PAGE)}
                        >
                            Show More
                        </Button>
                    </div>
                )}
            </section>

            <Separator className="my-8" />
            <Contact />

            <ProjectDialog
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </main>
    )
}