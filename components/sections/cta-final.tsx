"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap } from "lucide-react"

export default function CTAFinal() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Transformemos tu proyecto</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h2>

          <p className="text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Tengo la experiencia y las habilidades para construir soluciones escalables, seguras y de alto rendimiento.
            Hablemos sobre cómo puedo ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base font-semibold"
            >
              <Code2 className="w-5 h-5" />
              Iniciar Proyecto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 gap-2 px-8 py-6 text-base font-semibold bg-transparent"
            >
              Más Información
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted mt-8">Responderé tu mensaje en menos de 24 horas</p>
        </div>
      </div>
    </section>
  )
}
