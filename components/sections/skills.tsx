"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsData = [
  {
    category: "Backend",
    items: ["FastAPI", "Spring Boot", "Express.js", "Node.js"],
    icon: "⚙️",
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular"],
    icon: "🎨",
  },
  {
    category: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "Oracle", "Redis"],
    icon: "🗄️",
  },
  {
    category: "DevSecOps",
    items: ["Docker", "Docker Compose", "Proxmox", "MCP Server", "N8N"],
    icon: "🔒",
  },
  {
    category: "APIs",
    items: ["REST APIs", "GraphQL", "WebSockets", "GRPC"],
    icon: "🔌",
  },
  {
    category: "Herramientas",
    items: ["Git", "Github", "Linux", "Postman"],
    icon: "🛠️",
  },
]

export default function Skills() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-background via-primary/5 to-background">
      <div className="container px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Habilidades y Tecnologías</h2>
          <p className="text-muted text-lg max-w-2xl">
            Stack completo de desarrollo con enfoque en arquitecturas escalables, seguras y automatizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <Badge
                    key={idx}
                    className="bg-purple-100/20 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200/30 dark:border-purple-800/50 hover:bg-purple-100/30 dark:hover:bg-purple-900/40 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
