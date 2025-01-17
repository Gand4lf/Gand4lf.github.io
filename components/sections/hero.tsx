"use client"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "next-themes"

export function Hero() {
    const { theme } = useTheme()

    return (
        <section className="w-full flex flex-col items-center justify-center rounded-md overflow-hidden pb-8">
            <h1 className="md:text-6xl text-5xl lg:text-6xl font-bold text-center relative z-20 mb-6 text-foreground">
                George Curtis
            </h1>
            <div className="w-[40rem] h-2 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component with gradient overlay */}
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute w-full h-40 [mask-image:radial-gradient(2200px_1000px_at_top,white,transparent_20%)]">
                    <div className="relative w-full h-full">
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full absolute"
                            particleColor={theme === "dark" ? "#ffffff" : "#000000"}
                        />
                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
                    </div>
                </div>
            </div>

            {/* Subtitle, Theme Toggle, and Social Links */}
            <div className="relative z-20 flex flex-col items-center gap-4 mt-4">
                <h2 className="text-xl md:text-2xl text-neutral-500">
                    Software Developer
                </h2>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/Gand4lf" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 text-neutral-500" />
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/george-curtis-12b232a5" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 text-neutral-500" />
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="mailto:georgejamescurtis@hotmail.co.uk">
                            <Mail className="h-4 w-4 text-neutral-500" />
                        </a>
                    </Button>
                </div>
            </div>
        </section >
    )
} 