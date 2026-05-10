import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { USE_CASES } from "@/data/landingContent"

const USE_CASE_IMAGES = {
  0: "/images/sample-custom-logo-pouch.png",
  1: "/images/pouch_pendamping_gadget_minimalis.png",
  2: "/images/pouch_sudut_pandang_tiga_dimensi.png",
  3: "/images/pouch-dengan_isi_esensial_perjalanan.png",
  4: "/images/pouch_siap_untuk_barang_esensial__open_hint_.png",
  5: "/images/pouch-tampak-belakang.png",
}

export default function UseCases() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white" id="penggunaan">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[30px] md:text-[38px] font-display font-bold leading-[1.1] mb-4">
            Satu pouch, banyak kebutuhan branding
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-jisoi-cream rounded-[16px] p-3 overflow-hidden"
            >
              <div className="relative rounded-[12px] overflow-hidden mb-3 aspect-square">
                <img
                  src={USE_CASE_IMAGES[i]}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-sm mb-1">{useCase.title}</h3>
              <p className="text-xs text-jisoi-text/70">{useCase.copy}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}