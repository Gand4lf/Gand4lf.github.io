"use client"
import { Separator } from "@/components/ui/separator"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { ProjectCard } from "@/components/sections/projects/project-card"
import { ProjectDialog } from "@/components/sections/projects/project-dialog"
import { Contact } from "@/components/sections/contact"
import { useState, useMemo } from "react"
import { Project } from "@/types"
import { projects, websiteDesigns } from "@/data"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type SortOption = "latest" | "oldest" | "cool"

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const PROJECTS_PER_PAGE = 6
    const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE)
    const [sortBy, setSortBy] = useState<SortOption>("latest")

    const sortedProjects = useMemo(() => {
        let sorted = [...projects]

        switch (sortBy) {
            case "latest":
                return sorted.sort((a, b) => {
                    const aYear = parseInt(a.date.split('-')[0])
                    const bYear = parseInt(b.date.split('-')[0])
                    return bYear - aYear
                })
            case "oldest":
                return sorted.sort((a, b) => {
                    const aYear = parseInt(a.date.split('-')[0])
                    const bYear = parseInt(b.date.split('-')[0])
                    return aYear - bYear
                })
            case "cool":
                return sorted.sort((a, b) => (b.coolIndex ?? 0) - (a.coolIndex ?? 0))
        }
    }, [sortBy])

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
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                    <Select
                        value={sortBy}
                        onValueChange={(value: SortOption) => setSortBy(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">Latest First</SelectItem>
                            <SelectItem value="oldest">Oldest First</SelectItem>
                            <SelectItem value="cool">Coolness</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProjects.slice(0, visibleProjects).map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
                {visibleProjects < sortedProjects.length && (
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