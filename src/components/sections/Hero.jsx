import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { WHATSAPP_LINK_PREFILLED, SCARCITY_BADGE } from "@/data/landingContent"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center bg-gradient-to-br from-jisoi-black via-jisoi-burgundy to-jisoi-red" id="hero">
      <Container className="grid md:grid-cols-2 gap-4 md:gap-8 items-center py-10 sm:py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <Badge variant="secondary" className="mb-4">
            Custom Pouch DTF • Tanpa Minimum Order
          </Badge>
          <h1 className="text-[42px] md:text-[52px] font-display font-bold leading-[1.05] mb-4">
            Cetak Pouch Custom Logo, Tanpa MOQ, Free Mockup — Siap 3–5 Hari
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6 max-w-md">
            Cetak logo full color, mockup gratis, harga mulai Rp20.000/pcs, dan siap produksi dari order kecil sampai kebutuhan massal.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              size="lg"
              className="bg-jisoi-amber text-jisoi-burgundy hover:bg-jisoi-amber/90"
              asChild
            >
              <a href={WHATSAPP_LINK_PREFILLED} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp Sekarang
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10"
              asChild
            >
              <a href="#harga">Lihat harga & keunggulan</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="text-white/60">Free mockup • Garansi retur • Kapasitas 30.000 pcs/bulan</span>
            {SCARCITY_BADGE && (
              <Badge variant="destructive" className="animate-pulse bg-jisoi-amber text-jisoi-burgundy text-[10px]">
                {SCARCITY_BADGE}
              </Badge>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white/10 backdrop-blur rounded-[32px] p-4 md:p-6 border border-white/20 overflow-hidden">
            <img
              src="/images/sample-custom-logo-pouch.png"
              alt="Custom Pouch Berkah Rakka Mandiri dengan Logo - Sample Hasil Cetak DTF"
              className="w-full h-auto rounded-[24px] object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute top-4 right-4 bg-jisoi-amber text-jisoi-burgundy text-[10px] font-bold px-2 py-1 rounded-full">
              Full Color DTF
            </div>
            <div className="absolute bottom-4 left-4 bg-jisoi-burgundy text-white text-[10px] font-bold px-2 py-1 rounded-full">
              D300 Material
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}