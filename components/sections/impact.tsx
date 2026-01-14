import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const metrics = [
  { label: "99.98% uptime", value: "garantizado" },
  { label: "10 min → 30 seg", value: "por deploy" },
  { label: "Automatización para", value: "300+ usuarios" },
  { label: "99.9% reducción", value: "tiempo configuración" },
]

export default function Impact() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Resultados e Impacto</h2>
        <p className="text-muted mb-16 text-lg max-w-2xl">
          Métricas que demuestran el valor de optimizar y automatizar
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <Card
              key={idx}
              className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="text-xl font-bold text-foreground">{metric.label}</span>
                </div>
                <p className="text-muted text-sm">{metric.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
