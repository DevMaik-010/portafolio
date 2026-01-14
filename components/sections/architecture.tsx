import { Card } from "@/components/ui/card"
import { Zap, Shield, GitBranch, Network, Cog, Lock } from "lucide-react"

const architectureItems = [
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automatización completa desde commit hasta producción con seguridad integrada",
  },
  {
    icon: Cog,
    title: "Orquestación Docker/Kubernetes",
    description: "Despliegues escalables con auto-healing y orquestación inteligente",
  },
  {
    icon: Shield,
    title: "Seguridad Zero Trust",
    description: "Autenticación multinivel, cifrado end-to-end y monitoreo constante",
  },
  {
    icon: Network,
    title: "Nginx + ModSecurity",
    description: "Web Application Firewall con reglas OWASP y protección contra ataques",
  },
  {
    icon: Zap,
    title: "Automatización con Ansible/Terraform",
    description: "Infrastructure as Code para reproducibilidad y versionado de configuraciones",
  },
  {
    icon: Lock,
    title: "Seguridad Multicapa",
    description: "Implementación de IDS/IPS, WAF, VPN y autenticación de dos factores",
  },
]

export default function Architecture() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Arquitectura Técnica</h2>
        <p className="text-muted mb-16 text-lg max-w-2xl">
          Componentes clave que forman parte de mis soluciones de infraestructura
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureItems.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <Card
                key={idx}
                className="p-6 bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
