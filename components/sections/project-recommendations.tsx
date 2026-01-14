"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const recommendedProjects = [
  {
    level: "Básico",
    icon: "🌱",
    title: "Inicia con REST API + Express.js",
    description: "Construye tu primer servidor con Express.js y aprende los fundamentos de las APIs REST",
    benefits: ["Aprenderás routing", "Manejo de peticiones HTTP", "Conexión a bases de datos"],
    tools: ["Express.js", "PostgreSQL", "Postman"],
  },
  {
    level: "Intermedio",
    icon: "📈",
    title: "Integra Frontend y Backend con Next.js",
    description: "Crea una aplicación fullstack con Next.js conectando React con una API REST",
    benefits: ["Fullstack development", "Server-side rendering", "API routes en Next.js"],
    tools: ["Next.js", "React", "TypeScript", "Express.js"],
  },
  {
    level: "Avanzado",
    icon: "🚀",
    title: "Microservicios con Spring Boot y Sentri Cloud",
    description: "Diseña una arquitectura escalable con múltiples microservicios seguros en la nube",
    benefits: ["Arquitectura escalable", "Seguridad empresarial", "Deployment en la nube"],
    tools: ["Spring Boot", "Java", "Sentri Cloud", "Kubernetes", "Docker"],
  },
]

export default function ProjectRecommendations() {
  return (
    <section className="py-20 md:py-32 bg-muted/5 border-t border-border">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Próximos Pasos Recomendados</h2>
        <p className="text-muted mb-12 text-lg max-w-2xl">
          Sigue este roadmap para dominar las tecnologías más demandadas en ingeniería de sistemas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedProjects.map((rec, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-2xl">
                  {rec.icon}
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary border border-primary/40">{rec.level}</Badge>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {rec.title}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">{rec.description}</p>

              {/* Benefits */}
              <div className="mb-4 space-y-2 flex-1">
                {rec.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-muted">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="mb-6 space-y-2">
                <p className="text-xs font-semibold text-primary">Herramientas:</p>
                <div className="flex flex-wrap gap-1.5">
                  {rec.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-secondary/10 text-secondary text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full gap-2 group/btn">
                Empezar
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Roadmap visual */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-xl font-bold mb-8 text-foreground">Tu Ruta de Aprendizaje</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Fundamentos REST",
                  desc: "Express.js + PostgreSQL + Postman",
                  time: "2-3 semanas",
                },
                {
                  step: "02",
                  title: "Fullstack Moderno",
                  desc: "Next.js + React + TypeScript",
                  time: "3-4 semanas",
                },
                {
                  step: "03",
                  title: "Arquitectura Empresarial",
                  desc: "Spring Boot + Java + Docker + K8s",
                  time: "4-6 semanas",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted mb-3">{item.desc}</p>
                    <div className="inline-block px-2 py-1 rounded bg-accent/10 border border-accent/30 text-xs text-accent">
                      {item.time}
                    </div>
                  </div>

                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-primary border-2 border-background">
                      <ArrowRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
