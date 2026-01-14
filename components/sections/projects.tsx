"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"
import { useState } from "react"
import ProjectModal from "./project-modal"
import { getTechColor } from "@/components/tech-colors"

const projectsByLevel = {
  basico: [
    {
      id: "task-manager",
      title: "Gestor de Tareas REST API",
      description: "API REST simple con CRUD completo, validación y autenticación JWT",
      image: "/task-manager.jpg",
      technologies: ["Express.js", "PostgreSQL", "REST API", "JWT"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image", src: "/task-api.jpg" },
        { type: "image", src: "/api-docs.jpg" },
      ],
      recommendation: "Perfecto para aprender REST APIs y Express.js. Inicia con modelos básicos de datos.",
    },
    {
      id: "react-crud",
      title: "CRUD Frontend con React",
      description: "Interfaz interactiva con React para gestionar datos conectada a una API",
      image: "/react-interface.jpg",
      technologies: ["React", "TypeScript", "Fetch API", "CSS"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image", src: "/react-components.jpg" },
        { type: "image", src: "/form-validation.jpg" },
      ],
      recommendation: "Aprende gestión de estado con hooks (useState, useEffect) y consumo de APIs.",
    },
    {
      id: "python-db",
      title: "Python CLI con MySQL",
      description: "Aplicación de línea de comandos en Python conectada a MySQL",
      image: "/python-cli.jpg",
      technologies: ["Python", "MySQL", "SQLAlchemy", "CLI"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image", src: "/python-app.jpg" },
        { type: "image", src: "/database-schema.jpg" },
      ],
      recommendation: "Domina conexiones a bases de datos y operaciones CRUD desde Python.",
    },
    {
      id: "fastapi-intro",
      title: "FastAPI Básico",
      description: "API simple con FastAPI incluyendo validación automática de datos",
      image: "/fastapi.jpg",
      technologies: ["FastAPI", "Python", "Pydantic", "PostgreSQL"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image", src: "/swagger-ui.jpg" },
        { type: "image", src: "/api-validation.jpg" },
      ],
      recommendation: "Aprende FastAPI como alternativa moderna a Flask. Documentación automática incluida.",
    },
  ],
  intermedio: [
    {
      id: "nextjs-blog",
      title: "Blog Fullstack con Next.js",
      description: "Blog completo con autenticación, crear/editar posts, comentarios y búsqueda avanzada",
      image: "/nextjs-blog.jpg",
      technologies: ["Next.js", "React", "PostgreSQL", "TypeScript", "REST API"],
      link: "#",
      github: "#",
      difficulty: "Intermedio",
      media: [
        { type: "image", src: "/blog-home.jpg" },
        { type: "image", src: "/post-editor.jpg" },
        { type: "image", src: "/general-data-dashboard.png" },
      ],
      recommendation: "Integra Next.js con PostgreSQL, implementa autenticación y server-side rendering.",
    },
    {
      id: "graphql-social",
      title: "API GraphQL con FastAPI",
      description: "Red social con GraphQL: usuarios, posts, likes, comentarios y búsqueda de usuarios",
      image: "/graphql-logo.png",
      technologies: ["FastAPI", "GraphQL", "Python", "PostgreSQL", "Strawberry"],
      link: "#",
      github: "#",
      difficulty: "Intermedio",
      media: [
        { type: "image", src: "/graphql-explorer.jpg" },
        { type: "image", src: "/api-design.jpg" },
      ],
      recommendation: "Entiende por qué GraphQL es mejor que REST. Implementa queries y mutations complejas.",
    },
    {
      id: "spring-auth",
      title: "Autenticación con Spring Boot",
      description: "Microservicio de autenticación con JWT, roles y permisos granulares",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "JWT", "Spring Security"],
      link: "#",
      github: "#",
      difficulty: "Intermedio",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Domina Spring Boot para backend profesional. Aprende sobre seguridad y autorización.",
    },
    {
      id: "realtime-dashboard",
      title: "Dashboard Admin Reactivo",
      description: "Panel administrativo con gráficas en tiempo real, usuarios, roles y auditoría",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "WebSockets"],
      link: "#",
      github: "#",
      difficulty: "Intermedio",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Crea dashboards profesionales con gráficas y gestión de usuarios en tiempo real.",
    },
  ],
  avanzado: [
    {
      id: "ecommerce-saas",
      title: "Plataforma E-commerce SaaS",
      description: "Plataforma multi-tenant con suscripciones, pagos, carrito y órdenes",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "React", "PostgreSQL", "Stripe API", "TypeScript", "Docker"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Construye un SaaS completo: multi-tenancy, suscripciones y pagos con Stripe.",
    },
    {
      id: "microservices-arch",
      title: "Arquitectura de Microservicios",
      description: "5+ microservicios con API Gateway, descubrimiento de servicios y logs centralizados",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Diseña y despliega una arquitectura escalable con múltiples microservicios.",
    },
    {
      id: "realtime-collaboration",
      title: "Plataforma Colaborativa en Tiempo Real",
      description: "Editor colaborativo con WebSockets, Sentinel Guard para seguridad y versionado",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "WebSockets", "PostgreSQL", "Redis", "Sentinel Guard", "TypeScript"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Implementa colaboración en tiempo real con sincronización y seguridad avanzada.",
    },
    {
      id: "secure-cloud-platform",
      title: "Plataforma en Nube Segura",
      description: "Backend seguro con Sentri Cloud, monitoreo de seguridad y compliance HIPAA/PCI",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Spring Boot", "PostgreSQL", "Sentri Cloud", "Oracle", "Docker", "Kubernetes"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
        { type: "image", src: "/placeholder.svg?height=400&width=600" },
      ],
      recommendation: "Despliega aplicaciones empresariales con seguridad, compliance y monitoreo continuo.",
    },
  ],
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const allProjects = [...projectsByLevel.basico, ...projectsByLevel.intermedio, ...projectsByLevel.avanzado]

  const project = selectedProject ? allProjects.find((p) => p.id === selectedProject) : null

  return (
    <>
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-4 md:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Proyectos Realizados</h2>
            <p className="text-muted text-lg leading-relaxed">
              Exploración continua desde conceptos fundamentales hasta arquitecturas empresariales complejas. Cada
              proyecto representa un paso en la progresión tecnológica.
            </p>
          </div>

          <div className="space-y-16">
            {/* Básico Level */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold">Nivel Básico</h3>
                <Badge variant="outline" className="ml-auto text-xs">
                  Fundamentos
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projectsByLevel.basico.map((proj) => (
                  <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
                ))}
              </div>
            </div>

            {/* Intermedio Level */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                <h3 className="text-2xl font-bold">Nivel Intermedio</h3>
                <Badge variant="outline" className="ml-auto text-xs">
                  Avanzado
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projectsByLevel.intermedio.map((proj) => (
                  <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
                ))}
              </div>
            </div>

            {/* Avanzado Level */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-bold">Nivel Avanzado</h3>
                <Badge variant="outline" className="ml-auto text-xs">
                  Empresarial
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projectsByLevel.avanzado.map((proj) => (
                  <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={project} onClose={() => setSelectedProject(null)} />
    </>
  )
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: (typeof projectsByLevel.basico)[0]
  onSelect: (id: string) => void
}) {
  return (
    <Card
      className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer animate-scale-in"
      onClick={() => onSelect(project.id)}
    >
      {/* Image background */}
      <div className="relative w-full h-48 overflow-hidden bg-muted/10">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-card/80"></div>

      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
            {project.description}
          </p>
        </div>

        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => {
              const color = getTechColor(tech)
              return (
                <Badge
                  key={idx}
                  className={`${color.bg} ${color.text} border ${color.border} text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  style={{
                    animation: `slideInUp 0.4s ease-out ${idx * 0.05}s backwards`,
                  }}
                >
                  {tech}
                </Badge>
              )
            })}
          </div>
        </div>

        <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 animate-fade-in hover:shadow-md transition-all duration-300">
          <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">💡 {project.recommendation}</p>
        </div>

        {/* Action buttons con animaciones */}
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1 gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(project.id)
            }}
          >
            <Play className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            Ver Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 gap-1.5 bg-transparent hover:bg-secondary/10 transition-all duration-300"
          >
            <Github className="w-3.5 h-3.5" />
            Código
          </Button>
        </div>
      </div>
    </Card>
  )
}
