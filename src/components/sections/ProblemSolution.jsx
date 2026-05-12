import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_LINK } from "@/data/landingContent"
import { XCircle, CheckCircle } from "lucide-react"

const PROBLEM_SOLUTIONS = [
  {
    problem: "MOQ terlalu tinggi untuk testing desain.",
    solution: "Tanpa minimum order — mulai dari 1 pcs.",
  },
  {
    problem: "Deadline event mepet.",
    solution: "Produksi selesai dalam 3–5 hari kerja.",
  },
  {
    problem: "Takut hasil cetak tidak sesuai ekspektasi.",
    solution: "Free mockup gratis sebelum produksi dimulai.",
  },
  {
    problem: "Harga custom sering tidak transparan.",
    solution: "Harga jelas Rp20.000–Rp25.000/pcs, tertera langsung di halaman ini.",
  },
  {
    problem: "Butuh vendor yang sanggup order kecil dan besar.",
    solution: "Kapasitas 30.000 pcs/bulan — dari 1 pcs sampai kebutuhan massal.",
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white" id="solusi">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1]">
            Vendor merchandise sering ribet. Berkah Rakka Mandiri dibuat lebih fleksibel.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-[20px] overflow-hidden border border-jisoi-border"
            >
              <div className="flex items-start gap-3 px-4 py-3 bg-red-50">
                <XCircle className="w-5 h-5 text-jisoi-red mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-jisoi-text/70">{item.problem}</span>
              </div>
              <div className="flex items-start gap-3 px-4 py-3 bg-jisoi-cream">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-jisoi-text">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button variant="secondary" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi kebutuhan pouch
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}