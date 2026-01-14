import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "DevSecOps", items: ["DevSecOps", "CI/CD", "GitHub Actions"] },
  { category: "Virtualización", items: ["Proxmox VE", "Virtualización", "Contenedores"] },
  { category: "Orquestación", items: ["Kubernetes", "Docker", "Orquestación"] },
  { category: "Seguridad", items: ["Tailscale", "Cloudflare Zero Trust", "WAF"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "Next.js"] },
  { category: "Infraestructura", items: ["IDS/IPS", "PMG", "pfSense"] },
]

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-card/20">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Sobre mí</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
          Ingeniero especializado en construir infraestructuras seguras, escalables y automatizadas
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Avatar y descripción */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-border p-8 flex items-center justify-center">
                <div className="text-6xl text-primary font-mono font-bold">{"</>"}</div>
              </div>
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="space-y-4 flex flex-col justify-center">
            <p className="text-foreground text-lg leading-relaxed">
              Con más de 5 años de experiencia en infraestructura en la nube, he liderado proyectos críticos de
              automatización y seguridad para empresas de distintos sectores.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Mi pasión es diseñar soluciones que no solo funcionen, sino que escalen, sean seguras y estén
              completamente automatizadas.
            </p>
          </div>
        </div>

        {/* Skills en tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillGroup, idx) => (
            <Card key={idx} className="p-6 bg-card/50 border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-primary mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <Badge
                    key={itemIdx}
                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
