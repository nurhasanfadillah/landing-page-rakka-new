import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { TRUST_ITEMS } from "@/data/landingContent"

const CLIENT_LOGOS = [
  { src: "/images/logo-klien/gojek.PNG", name: "Gojek" },
  { src: "/images/logo-klien/shopee.PNG", name: "Shopee" },
  { src: "/images/logo-klien/bca.PNG", name: "BCA" },
  { src: "/images/logo-klien/telkomsel.PNG", name: "Telkomsel" },
  { src: "/images/logo-klien/samsung.PNG", name: "Samsung" },
  { src: "/images/logo-klien/pertamina.PNG", name: "Pertamina" },
  { src: "/images/logo-klien/pln.PNG", name: "PLN" },
  { src: "/images/logo-klien/ikea.PNG", name: "IKEA" },
  { src: "/images/logo-klien/shell.PNG", name: "Shell" },
]

export default function TrustStrip() {
  return (
    <section className="bg-jisoi-cream py-6 overflow-hidden">
      <Container>
        <p className="text-center text-xs text-jisoi-text/50 mb-4 font-medium uppercase tracking-wider">
          Telah dipercaya oleh brand besar
        </p>
        <div className="relative">
          {/* Gradient fade edges for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-jisoi-cream to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-jisoi-cream to-transparent z-10 pointer-events-none md:hidden" />

          <div className="flex gap-8 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible items-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.img
                key={logo.src}
                src={logo.src}
                alt={`Logo ${logo.name} — klien Berkah Rakka Mandiri`}
                loading="lazy"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="h-12 w-auto object-contain flex-shrink-0 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 mt-6 md:flex-wrap md:justify-center md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-jisoi-border rounded-full text-sm hover:border-jisoi-red/50 transition-colors">
                <span className="font-semibold text-jisoi-red">{item.label}</span>
                <span className="text-jisoi-text/60 text-xs">{item.proof}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}