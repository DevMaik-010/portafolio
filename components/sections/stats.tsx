"use client"

import { Card } from "@/components/ui/card"

const stats = [
  {
    number: "50+",
    label: "Proyectos Completados",
    description: "Desde aplicaciones web hasta infraestructura cloud compleja",
  },
  {
    number: "5+",
    label: "Años de Experiencia",
    description: "Trabajando en startups y empresas tecnológicas",
  },
  {
    number: "100%",
    label: "Satisfacción de Clientes",
    description: "Todos los proyectos entregados dentro de cronograma",
  },
  {
    number: "10+",
    label: "Tecnologías Dominadas",
    description: "Stack completo: backend, frontend, cloud y DevSecOps",
  },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 border border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="mb-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
              </div>
              <p className="font-semibold text-foreground mb-2">{stat.label}</p>
              <p className="text-sm text-muted">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
