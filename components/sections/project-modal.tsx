"use client"

import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProjectMedia {
  type: "image" | "video"
  src: string
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  media: ProjectMedia[]
  recommendation: string
}

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  if (!project) return null

  const currentMedia = project.media[currentMediaIndex]

  const handleNext = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % project.media.length)
  }

  const handlePrev = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length)
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Media Gallery */}
          <div className="space-y-4">
            <div className="relative w-full bg-muted/20 rounded-xl overflow-hidden aspect-video">
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.src || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${currentMediaIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={currentMedia.src}
                  controls
                  className="w-full h-full"
                  poster={`${currentMedia.src}?poster`}
                />
              )}

              {/* Navigation arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    aria-label="Previous media"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    aria-label="Next media"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}

              {/* Media counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 rounded-full text-white text-sm">
                {currentMediaIndex + 1} / {project.media.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            {project.media.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.media.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentMediaIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all overflow-hidden ${
                      idx === currentMediaIndex ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.src || "/placeholder.svg"}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted mb-2">Descripción</h3>
              <p className="text-foreground">{project.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted mb-3">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-sm text-primary font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted mb-2">Recomendación</h3>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-sm text-accent">{project.recommendation}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 gap-2">
                <ExternalLink className="w-4 h-4" />
                Ver Proyecto
              </Button>
              <Button variant="outline" className="flex-1 gap-2 bg-transparent">
                Ver Código en GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
