import { Badge } from "@/components/ui/badge"

export function About() {
    const languages = [
        "TypeScript", "JavaScript", "HTML", "CSS", "React/React Native",
        "Redux", "Go", "Python", "C", "Rust", "Java"
    ];

    const tools = [
        "Photoshop", "Tailwind", "Figma", "AWS Cognito", "AWS Lambda",
        "MongoDB", "DynamoDB", "Graph Databases", "SQL/RDS", "Git", "Gremlin"
    ];

    return (
        <section className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
                A passionate developer with experience in building modern web applications.
                Focused on creating user-friendly and performant solutions using cutting-edge technologies.
                <br />
                <br />
                All Logos and Designs are made by me.
            </p>
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Languages & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((lang) => (
                            <Badge key={lang} className="min-w-[80px] justify-center">
                                {lang}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <Badge key={tool} className="min-w-[80px] justify-center">
                                {tool}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}