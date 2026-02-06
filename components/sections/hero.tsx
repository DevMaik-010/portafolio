"use client";

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-transparent to-transparent"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary/30" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 container px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
          {/* Título principal */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">DevSecOps</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">Cloud Architect | Fullstack Developer</h2>
          </div>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Especializado en automatización, infraestructura moderna y despliegues escalables.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
            onClick={() => window.open("https://github.com/DevMaik-Droid", "_blank")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6 py-6 text-base cursor-pointer">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:text-white gap-2 px-6 py-6 text-base bg-transparent cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("/cv_miguel.pdf", "_blank")}
              className="border-secondary/50 text-secondary hover:text-white  gap-2 px-6 py-6 text-base bg-transparent cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
