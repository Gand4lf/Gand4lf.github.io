import { Project } from "@/types"

export const projects: Project[] = [
    {
        title: "Helix Graph Database",
        date: "2025",
        description: "Designed and implemented a custom query language for a graph database. Currently expanding into database engine development.",
        longDescription: "For this project I built a query language for a graph database a friend and I are working on. My primary contribution so far has been designing and implementing the query language, and I plan to expand into the database engine side of the project soon.",
        technologies: ["Rust", "Database Design", "Query Languages"],
        images: ["@/public/projects/helix-logo.png"],
    },
    {
        title: "Construction Management Tool",
        date: "2024 - 2025",
        description: "Leading front-end development in a team of five, building a management tool for a construction company. Mentoring team members on React Native for mobile development.",
        longDescription: "Currently, I'm part of a team of five building a management tool for a construction company. My focus has been on the front end, where I'm developing the website using React. I've also been mentoring my team on React Native as they build the mobile application.",
        technologies: ["React", "React Native", "AWS", "Team Leadership"],
        images: ["/projects/construction-logo.png"],
    },
    {
        title: "BlackBook",
        date: "2024",
        description: "Built a personal interaction logging app in a day to help track meetings and connections. Widely adopted by family and friends.",
        longDescription: "I was fed up with forgetting where I met people and their names. So I built BlackBook in a day, to log interactions I had with people. I and a number of my family and friends have used this extensively ever since.",
        technologies: ["React Native", "TypeScript"],
        images: ["/projects/blackbook-logo.png"],
    },
    {
        title: "Parallel Computing Projects",
        date: "2024",
        description: "Received top marks for implementing parallel and distributed versions of Conway's Game of Life, showcasing proficiency in concurrent programming.",
        longDescription: "As part of my coursework, I received the highest grade for developing parallelised and distributed versions of Conway's Game of Life. I initially implemented the parallel version in Go and later rewrote it in Rust.",
        technologies: ["Go", "Rust", "Parallel Computing"],
    },
    {
        title: "LLM API Pipeline",
        date: "2023",
        description: "Developed an AI pipeline integrating OpenAI's API with image generation to create copyright-free images for Cookly's meal database.",
        longDescription: "I built a Pipeline that incorporated OpenAI's API to create prompts based on images and other text data. This then fed into an image generator, which allowed me to generate thousands of realistic images for Cookly's meal database that didn't violate copyright laws.",
        technologies: ["OpenAI API", "Stability API", "SDXL", "Python"],
        images: ["/projects/llm-tacos.png", "/projects/llm-burger.png"],
    },
    {
        title: "Cookly",
        date: "2022 - 2024",
        description: "Led front-end development for a commercial health and fitness app, focusing on UI design and implementation.",
        longDescription: "Cookly was a commercial-level health and fitness app. I worked primarily on the front-end, designing the UI and implementing its functionality. I learnt a lot about design, programming and systems architecture during this project.",
        technologies: ["React", "React Native", "TypeScript", "AWS"],
        images: ["/projects/Cookly.png"],
    },
    {
        title: "Home Automation System",
        date: "2020 - 2021",
        description: "Built a smart home system with custom laser tripwires for room occupancy tracking and a custom virtual assistant.",
        longDescription: "This was my first major project. I developed a smart home system that could track the number of people in different rooms using custom-built laser tripwires and manage the electrical consumption of those rooms accordingly. I also created a virtual assistant, similar to Alexa or Google Home, which I designed and implemented from scratch.",
        technologies: ["Raspberry Pi", "Python", "Linux"],
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