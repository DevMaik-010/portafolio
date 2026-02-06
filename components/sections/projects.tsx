"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"
import { useState } from "react"
import ProjectModal from "./project-modal"
import { getTechColor } from "@/components/tech-colors"
import Image from "next/image"

const projectsByLevel = {
  basico: [
    {
      id: "gestion-libros",
      title: "Gestion de Libros",
      description: "Crud basico de libros con login y registro.",
      image: "/basico01/basico1_1.webp",
      technologies: ["Python", "Tkinter", "PostgreSQL"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image" as const, src: "/basico01/basico1_1.webp" },
        { type: "image" as const, src: "/basico01/basico1_2.webp" },
        { type: "image" as const, src: "/basico01/basico1_3.webp" },
        { type: "image" as const, src: "/basico01/basico1_4.webp" },
      ],
      recommendation: "Perfecto para aprender REST APIs y Express.js. Inicia con modelos básicos de datos.",
    },
    {
      id: "crudestudiantes",
      title: "Gestion de tareas",
      description: "Interfaz interactiva con Flask para gestionar tareas conectada a una API",
      image: "/basico02/basico2_1.webp",
      technologies: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#",
      difficulty: "Básico",
      media: [
        { type: "image" as const, src: "/basico02/basico2_1.webp" },
        { type: "image" as const, src: "/basico02/basico2_2.webp" },
        { type: "image" as const, src: "/basico02/basico2_3.webp" },
        { type: "image" as const, src: "/basico02/basico2_4.webp" },
        { type: "image" as const, src: "/basico02/basico2_5.webp" },
        { type: "image" as const, src: "/basico02/basico2_6.webp" },
        { type: "image" as const, src: "/basico02/basico2_7.webp" },
        
      ],
      recommendation: "Aprende gestión de estado con hooks (useState, useEffect) y consumo de APIs.",
    }
    
  ],
  intermedio: [
    {
      id: "edusentri",
      title: "EduSentri",
      description: "Aplicación web para simulacros de examen para la educación superior.",
      image: "/edu-sentri/edusentri_01.webp",
      technologies: ["Next.js", "PostgreSQL", "TypeScript", "Supabase", "Tailwind CSS"],
      link: "#",
      github: "#",
      difficulty: "Intermedio",
      media: [
        { type: "image" as const, src: "/edu-sentri/edusentri_01.webp" },
        { type: "image" as const, src: "/edu-sentri/edusentri_02.webp" },
        { type: "image" as const, src: "/edu-sentri/edusentri_03.webp" },
        { type: "image" as const, src: "/edu-sentri/edusentri_04.webp" },
        { type: "image" as const, src: "/edu-sentri/edusentri_05.webp" },
      ],
      recommendation: "Integra Next.js con PostgreSQL, implementa autenticación y server-side rendering.",
    },
  ],
  avanzado: [
    {
      id: "sentricloud",
      title: "SentriCloud",
      description: "Plataforma de despliegue de aplicaciones web, gestion de vps.",
      image: "/sentri-cloud/cloud_01.webp",
      technologies: ["Next.js", "PostgreSQL", "FastAPI", "TypeScript", "Docker", "Proxmox"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image" as const, src: "/sentri-cloud/cloud_01.webp" },
        { type: "image" as const, src: "/sentri-cloud/cloud_02.webp" },
        { type: "image" as const, src: "/sentri-cloud/cloud_03.webp" },
        { type: "image" as const, src: "/sentri-cloud/cloud_04.webp" },
        { type: "image" as const, src: "/sentri-cloud/cloud_05.webp" },
        { type: "image" as const, src: "/sentri-cloud/cloud_06.webp" },
      ],
      recommendation: "Despliega tus aplicaciones web en la nube con SentriCloud.",
    },
    {
      id: "sentinel_guard",
      title: "Sentinel Guard",
      description: "Sistema de monitoreo de seguridad con reconocimiento facial y movimiento con IA.",
      image: "/sentinel-guard/sentinel_guard_01.webp",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
      link: "#",
      github: "#",
      difficulty: "Avanzado",
      media: [
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_01.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_02.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_03.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_04.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_05.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_06.webp" },
        { type: "image" as const, src: "/sentinel-guard/sentinel_guard_07.webp" }
      ],
      recommendation: "Potencia tus camaras ip con IA para detectar movimiento y reconocimiento facial.",
    }
  ],
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const allProjects = [...projectsByLevel.basico, ...projectsByLevel.intermedio, ...projectsByLevel.avanzado]

  const project = (selectedProject ? allProjects.find((p) => p.id === selectedProject) : null) ?? null

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
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105"
          width={800}
          height={800}
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
            Ver Proyecto
          </Button>
        </div>
      </div>
    </Card>
  )
}
