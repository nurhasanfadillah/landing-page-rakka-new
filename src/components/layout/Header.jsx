import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK } from "@/data/landingContent"
import { Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-jisoi-burgundy/80 backdrop-blur-md">
      <Container className="flex items-center justify-between h-full">
        <div className="flex items-center gap-2">
          <img src="/images/logo-rakka.png" alt="Berkah Rakka Mandiri Logo" className="h-8 w-auto" />
          <span className="font-display text-lg text-white font-bold hidden sm:block">
            Berkah Rakka Mandiri
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#produk" className="text-sm text-white/90 hover:text-white">Produk</a>
          <a href="#harga" className="text-sm text-white/90 hover:text-white">Harga</a>
          <a href="#faq" className="text-sm text-white/90 hover:text-white">FAQ</a>
        </div>
        <Button
          asChild
          size="pill"
          className="text-sm"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Phone className="w-4 h-4 mr-2" />
            Chat WA
          </a>
        </Button>
      </Container>
    </header>
  )
}
