"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Presente",
    description:
      "Lideré el desarrollo de arquitectura microservicios con Spring Boot y FastAPI, mejorando rendimiento 40%",
    tags: ["Spring Boot", "FastAPI", "Kubernetes", "PostgreSQL"],
  },
  {
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    description:
      "Construí plataforma SaaS con Next.js y Node.js. Implementé CI/CD pipeline que redujo deployment time 70%",
    tags: ["Next.js", "Express.js", "Docker", "GraphQL"],
  },
  {
    role: "Junior Developer",
    company: "WebDev Agency",
    period: "2020 - 2021",
    description: "Desarrollé aplicaciones web con React y APIs REST. Participé en buenas prácticas de código limpio",
    tags: ["React", "PHP", "MySQL", "REST APIs"],
  },
]

export default function Experience() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-background via-background to-primary/5">
      <div className="container px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Experiencia</h2>
          <p className="text-muted text-lg max-w-2xl">
            Trayectoria profesional en desarrollo full stack y arquitectura de sistemas
          </p>
        </div>

        <div className="space-y-6 max-w-3xl">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <p className="text-sm text-muted whitespace-nowrap">{exp.period}</p>
              </div>

              <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    className="bg-purple-100/20 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200/30 dark:border-purple-800/50"
                  >
                    {tag}
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
