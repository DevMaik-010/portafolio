export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted text-sm">© 2025 DevSecOps Engineer. Todos los derechos reservados.</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
