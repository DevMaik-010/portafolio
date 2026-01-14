"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Tech Lead @ StartupXYZ",
    content:
      "Excelente profesional. Implementó arquitectura escalable que redujo tiempos de deploy en 70%. Altamente recomendado.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "María García",
    role: "CTO @ TechCorp",
    content:
      "Demostró profundo conocimiento en DevSecOps. Las soluciones implementadas mejoraron significativamente nuestra seguridad.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Juan López",
    role: "Product Manager @ CloudApp",
    content: "Muy responsable y profesional. Entregó soluciones en tiempo récord sin comprometer la calidad.",
    rating: 5,
    image: "👨‍💻",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-background to-primary/5">
      <div className="container px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Lo que dicen de mí</h2>
          <p className="text-muted text-lg max-w-2xl">Testimonios de clientes y colegas que han trabajado conmigo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground flex-1 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
