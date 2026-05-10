import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { TESTIMONIALS } from "@/data/landingContent"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white" id="testimoni">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Dipercaya oleh ribuan pelanggan puas
          </h2>
          <p className="text-lg text-jisoi-text/60 max-w-2xl mx-auto">
            Dengarkan pengalaman nyata dari mereka yang sudah menggunakan Jisoi untuk merchandise dan event mereka.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:max-w-4xl md:mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-auto bg-jisoi-cream rounded-[24px] p-6 border border-jisoi-border hover:border-jisoi-red/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-jisoi-amber text-jisoi-amber"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-jisoi-text/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-jisoi-red/20 flex items-center justify-center text-jisoi-red font-bold text-sm flex-shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-jisoi-text">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-jisoi-text/60">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-jisoi-text/60">
            <span className="font-semibold text-jisoi-red">✓ 99%</span> kepuasan pelanggan berdasarkan 500+ ulasan
          </p>
        </motion.div>
      </Container>
    </section>
  )
}