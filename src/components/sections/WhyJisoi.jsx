import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { WHY_JISOI } from "@/data/landingContent"

const WHY_IMAGES = {
  0: "/images/produksi-1.jpeg",
  1: "/images/produksi-2.jpeg",
  2: "/images/cetak-dtf.jpeg",
  3: "/images/tim-admin.jpeg",
}

export default function WhyJisoi() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-jisoi-cream" id="keunggulan">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Kenapa bisnis dan event cocok pakai Jisoi?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Production Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            <img
              src={WHY_IMAGES[0]}
              alt="Produksi Jisoi - Mesin DTF printing"
              className="w-full h-32 md:h-48 object-cover rounded-[24px]"
              loading="lazy"
            />
            <img
              src={WHY_IMAGES[1]}
              alt="Produksi Jisoi - Quality control"
              className="w-full h-32 md:h-48 object-cover rounded-[24px]"
              loading="lazy"
            />
            <img
              src={WHY_IMAGES[2]}
              alt="Proses Cetak DTF Jisoi - Hasil cetak full color"
              className="w-full h-32 md:h-48 object-cover rounded-[24px]"
              loading="lazy"
            />
            <img
              src={WHY_IMAGES[3]}
              alt="Tim Jisoi - Admin responsif siap membantu"
              className="w-full h-32 md:h-48 object-cover rounded-[24px]"
              loading="lazy"
            />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {WHY_JISOI.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="p-4 bg-white rounded-[16px] border border-jisoi-border hover:border-jisoi-red/50 hover:shadow-lg transition-all duration-200 cursor-default"
              >
                <div className="text-lg font-display font-bold text-jisoi-red mb-1">
                  {item.title}
                </div>
                <p className="text-sm text-jisoi-text/70">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}