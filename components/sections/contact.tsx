import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border border-border hover:border-primary/50 transition-colors">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Tienes un proyecto?</h2>
            <p className="text-muted mb-8 text-lg leading-relaxed">
              Estoy disponible para consultoría, proyectos fullstack y soluciones de infraestructura. Contáctame para
              discutir cómo podemos trabajar juntos.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 py-6 text-base"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary/10 gap-2 py-6 text-base bg-transparent"
              >
                <MessageSquare className="w-5 h-5" />
                Mensaje directo
              </Button>
            </div>
          </Card>

          {/* Enlaces de contacto */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div>
              <p className="text-muted text-sm mb-2">Email</p>
              <p className="text-foreground font-semibold text-sm break-all">contact@devsecops.dev</p>
            </div>
            <div>
              <p className="text-muted text-sm mb-2">GitHub</p>
              <p className="text-primary font-semibold text-sm hover:underline cursor-pointer">@devsecops</p>
            </div>
            <div>
              <p className="text-muted text-sm mb-2">LinkedIn</p>
              <p className="text-primary font-semibold text-sm hover:underline cursor-pointer">devsecops-eng</p>
            </div>
            <div>
              <p className="text-muted text-sm mb-2">Twitter</p>
              <p className="text-primary font-semibold text-sm hover:underline cursor-pointer">@devsecops_dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
