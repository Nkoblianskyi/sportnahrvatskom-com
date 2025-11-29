import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h3 className="text-lg font-serif font-bold uppercase tracking-wide">
                <span className="text-[#FF0000]">SPORT</span>
                <span className="text-foreground">NA</span>
                <span className="text-[#0D5EAF]">HRVATSKOM</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Vaš premijerni vodič za elitne online kladionice u Hrvatskoj. Profesionalne recenzije i detaljne
              usporedbe.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>© 2025 sportnahrvatskom.com</p>
              <p>Sva prava pridržana</p>
            </div>
          </div>

          {/* Navigation - Two Columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Navigacija</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    O Nama
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Politika Privatnosti
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Politika Kolačića
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Odgovorno Klađenje</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>18+ Isključivo za punoljetne</li>
                <li>Igrajte kontrolirano</li>
                <li>SRIJ certifikat</li>
                <li>Sigurna igra</li>
              </ul>
              <div className="mt-4 text-xs text-muted-foreground space-y-1">
                <p>OdgovornoKlađenje.hr</p>
                <p>PodrškaIgračima.hr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="border-t border-border pt-8">
          <h4 className="font-semibold text-muted-foreground mb-4 text-center text-sm">Regulacija i Partnerstva</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.hupis.hr/klok" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] rounded px-2 py-1">
                <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-muted-foreground text-xs text-center leading-relaxed">
            Ova web stranica sadrži partnerske poveznice. Možemo primiti naknadu kada kliknete na linkove platformi koje
            recenziramo. Sve informacije pružene su isključivo u informativne svrhe.
          </p>
        </div>
      </div>
    </footer>
  )
}
