import { Container } from "@/components/ui/Container"
import { WHATSAPP_LINK } from "@/data/landingContent"
import { BUSINESS_INFO } from "@/data/landingContent"

export default function Footer() {
  return (
    <footer className="bg-jisoi-black text-white py-12 pb-20 sm:pb-24 md:pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/images/logo-rakka.png" alt="Berkah Rakka Mandiri Logo" className="h-10 w-auto mb-4" />
            <h3 className="font-display text-lg mb-3">{BUSINESS_INFO.brand}</h3>
            <p className="text-sm text-white/70">{BUSINESS_INFO.company}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{BUSINESS_INFO.address}</li>
              <li>
                <a href={`https://${BUSINESS_INFO.website}`} className="hover:text-white">
                  {BUSINESS_INFO.website}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} className="hover:text-white">
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Tautan</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#produk" className="hover:text-white">Produk</a></li>
              <li><a href="#harga" className="hover:text-white">Harga</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 pb-4 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} {BUSINESS_INFO.brand}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}