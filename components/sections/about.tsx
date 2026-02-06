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
    <section className="p-10 bg-linear-to-b from-background via-background to-card/20">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Sobre mí</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
          Estudiante de Ingeniería de Sistemas especializado en construir sitios web y aplicaciones web desde su desarrollo hasta su despliegue.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Avatar y descripción */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full aspect-square bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl border border-border p-8 flex items-center justify-center">
                <div className="text-6xl text-primary font-mono font-bold">{"</>"}</div>
              </div>
            </div>
          </div>

          {/* Texto descriptivo */}
          <div className="space-y-4 flex flex-col justify-center">
            <p className="text-foreground text-lg leading-relaxed">
              Con más de 8 años de experiencia personal en desarrollo de software, he participado en proyectos críticos de
              automatización.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Mi pasión es diseñar soluciones que no solo funcionen, sino que escalen, sean seguras y estén
              completamente automatizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
