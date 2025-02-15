export interface Project {
    title: string
    date: string
    description: string
    technologies: string[]
    longDescription?: string
    images?: string[]
    link?: string
    starred?: boolean
    coolIndex?: number  // Higher number = cooler project
} 