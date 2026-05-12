import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK } from "@/data/landingContent"

export default function FinalCta() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-jisoi-black" id="mulai">
      <Container className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Punya logo? Kirim sekarang, dapatkan mockup pouch gratis
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Cocok untuk merchandise bisnis, souvenir event, komunitas, dan kebutuhan branding tanpa minimum order.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-jisoi-red text-jisoi-black hover:bg-jisoi-red/90"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp — Gratis, Tanpa Komitmen
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10"
              asChild
            >
              <a href="/katalog-jisoi.pdf" download>
                📥 Download Katalog
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/60 mt-4">
            Biasanya dibalas dalam beberapa menit · Konsultasi desain, harga & estimasi produksi gratis
          </p>
        </motion.div>
      </Container>
    </section>
  )
}