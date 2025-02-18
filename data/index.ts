import { Project } from "@/types"

export const projects: Project[] = [
    {
        title: "Helix Graph Database",
        date: "2025",
        description: "Designed and implemented a custom query language for a graph database. Currently expanding into database engine development.",
        longDescription: "For this project I built a query language for a graph database a friend and I are working on. My primary contribution so far has been designing and implementing the query language, and I plan to expand into the database engine side of the project soon.",
        technologies: ["Rust", "Database Design", "Query Languages"],
        images: ["/projects/helix-logo.png"],
        starred: true,
        coolIndex: 100
    },
    {
        title: "EZ Docs",
        date: "2025",
        description: "An AI Agent that generates documentation for your codebase.",
        longDescription: "Built a VS Code extention that uses an AI Agent to generate documentation for your codebase.",
        technologies: ["o3-mini", "Typescript", "AI"],
        images: ["/projects/ez-docs-white.png"],
        starred: false,
        coolIndex: 70
    },
    {
        title: "Construction Management Tool",
        date: "2024 - 2025",
        description: "Leading front-end development in a team of five, building a management tool for a construction company. Mentoring team members on React Native for mobile development.",
        longDescription: "Currently, I'm part of a team of five building a management tool for a construction company. My focus has been on the front end, where I'm developing the website using React. I've also been mentoring my team on React Native as they build the mobile application.",
        technologies: ["React", "React Native", "AWS", "Team Leadership"],
        images: ["/projects/construction-logo.png"],
        starred: false,
        coolIndex: 65
    },
    {
        title: "Deep Research Slack Bot",
        date: "2025",
        description: "A slack bot that lets you use OpenAI's Deep Research inside a Slack channel.",
        longDescription: "A slack bot that lets you use OpenAI's Deep Research inside a Slack channel. I built this to allow users in Europe to use OpenAI's Deep Research by using an open-source copy that also let teams of people see and colaoborate on the same research.",
        technologies: ["Slack", "TypeScript", "OpenAI"],
        images: ["/projects/slack.png"],
        coolIndex: 65
    },
    {
        title: "BlackBook",
        date: "2024",
        description: "Built a personal interaction logging app in a day to help track meetings and connections. Widely adopted by family and friends.",
        longDescription: "I was fed up with forgetting where I met people and their names. So I built BlackBook in a day, to log interactions I had with people. I and a number of my family and friends have used this extensively ever since.",
        technologies: ["React Native", "TypeScript"],
        images: ["/projects/blackbook-logo.png"],
        coolIndex: 50
    },
    {
        title: "Parallel Computing Projects",
        date: "2024",
        description: "Received top marks for implementing parallel and distributed versions of Conway's Game of Life, showcasing proficiency in concurrent programming.",
        longDescription: "As part of my coursework, I received the highest grade for developing parallelised and distributed versions of Conway's Game of Life. I initially implemented the parallel version in Go and later rewrote it in Rust.",
        technologies: ["Go", "Rust", "Parallel Computing"],
        starred: true,
        coolIndex: 90
    },
    {
        title: "LLM API Pipeline",
        date: "2023",
        description: "Developed an AI pipeline integrating OpenAI's API with image generation to create copyright-free images for Cookly's meal database.",
        longDescription: "I built a Pipeline that incorporated OpenAI's API to create prompts based on images and other text data. This then fed into an image generator, which allowed me to generate thousands of realistic images for Cookly's meal database that didn't violate copyright laws.",
        technologies: ["OpenAI API", "Stability API", "SDXL", "Python"],
        images: ["/projects/llm-tacos.png", "/projects/llm-burger.png"],
        coolIndex: 68
    },
    {
        title: "Cookly",
        date: "2022 - 2024",
        description: "Led front-end development for a commercial health and fitness app, focusing on UI design and implementation.",
        longDescription: "Cookly was a commercial-level health and fitness app. I worked primarily on the front-end, designing the UI and implementing its functionality. I learnt a lot about design, programming and systems architecture during this project.",
        technologies: ["React", "React Native", "TypeScript", "AWS"],
        images: ["/projects/Cookly.png"],
        starred: true,
        coolIndex: 92
    },
    {
        title: "Home Automation System",
        date: "2020 - 2021",
        description: "Built a smart home system with custom laser tripwires for room occupancy tracking and a custom virtual assistant.",
        longDescription: "This was my first major project. I developed a smart home system that could track the number of people in different rooms using custom-built laser tripwires and manage the electrical consumption of those rooms accordingly. I also created a virtual assistant, similar to Alexa or Google Home, which I designed and implemented from scratch.",
        technologies: ["Raspberry Pi", "Python", "Linux"],
        starred: true,
        coolIndex: 95
    },
    {
        title: "Laser Tripwire System",
        date: "2020",
        description: "Built a discrete laser tripwire system to track movements through a doorway.",
        longDescription: "Built a discrete laser tripwire system to track movements through a doorway. I learnt a lot about hardware and software integration during this project. I used a Raspberry Pi to connect the lasers and Light Detecting Resistors (LDRs). I then used a Python script to process the data, calculate the direction of movement and track which way people were moving through the doorway.",
        technologies: ["Raspberry Pi", "Electrical & Electronic Engineering"],
        coolIndex: 70
    },
]

export const websiteDesigns = [
    {
        title: "Modern E-commerce",
        description: "Clean, conversion-focused design with seamless product browsing",
        technologies: ["Next.js", "Tailwind", "Stripe"],
        image: "/designs/ecommerce.jpg"
    },
    {
        title: "Portfolio Template",
        description: "Minimalist portfolio design for creative professionals",
        technologies: ["React", "Framer Motion", "GSAP"],
        image: "/designs/portfolio.jpg"
    },
    {
        title: "SaaS Dashboard",
        description: "Intuitive admin dashboard with real-time analytics",
        technologies: ["Vue.js", "Tailwind", "D3.js"],
        image: "/designs/dashboard.jpg"
    }
]