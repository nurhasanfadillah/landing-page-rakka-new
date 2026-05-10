import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { WORKFLOW_STEPS, WHATSAPP_LINK } from "@/data/landingContent"
import { Button } from "@/components/ui/Button"

export default function DtfWorkflow() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white" id="cara-order">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Dari logo ke pouch custom, alurnya singkat
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6">
          {WORKFLOW_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-jisoi-cream rounded-[24px] p-6 text-center"
            >
              <div className="w-10 h-10 bg-jisoi-red text-white font-bold rounded-full flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-jisoi-text/60">{step.description}</p>
              {i < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-jisoi-red/30">→</div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-jisoi-amber text-jisoi-burgundy"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Mulai dari chat WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </section>
  )
}