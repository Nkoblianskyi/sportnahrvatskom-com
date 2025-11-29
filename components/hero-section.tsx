"use client"
import Image from "next/image"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("hr-HR", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="relative py-12 sm:py-16 md:py-20 text-center overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <Image
          src="/croatian-football-stadium-atmosphere-with-red-and-.jpg"
          alt="Hrvatski sportski stadion"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-2 sm:mb-3 animate-fade-in-up text-secondary-foreground">
          ELITNE SPORTSKE KLADIONICE HRVATSKE
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg text-secondary-foreground/80 mb-4 sm:mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Ažurirano {formattedDate}
        </p>
        <p
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-6 sm:mb-8 animate-fade-in-up text-secondary-foreground/90 leading-relaxed"
          style={{ animationDelay: "200ms" }}
        >
          Ekskluzivna selekcija vrhunskih kladionica odabranih za zahtjevne hrvatske igrače. Svaka platforma prolazi
          rigoroznu provjeru sigurnosti, kvalitete i pouzdanosti.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-md backdrop-blur-sm border border-secondary-foreground/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-secondary-foreground font-medium">Certificirana Sigurnost</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-md backdrop-blur-sm border border-secondary-foreground/20">
            <Image src="/flag.png" alt="Hrvatska licenca" width={20} height={20} />
            <span className="text-xs sm:text-sm text-secondary-foreground font-medium">HR Licenca</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-md backdrop-blur-sm border border-secondary-foreground/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs sm:text-sm text-secondary-foreground font-medium">Ekspresne Isplate</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary-foreground/10 rounded-md backdrop-blur-sm border border-secondary-foreground/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            <span className="text-xs sm:text-sm text-secondary-foreground font-medium">Premium Bonusi</span>
          </div>
        </div>

        <p className="text-xs animate-fade-in-up text-secondary-foreground/70" style={{ animationDelay: "400ms" }}>
          Igrajte odgovorno. Vrijede uvjeti i pravila.{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAdvertiserInfoClick()
            }}
            className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300 cursor-pointer"
          >
            Podaci o oglašivačima
          </button>{" "}
          |{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAgeRestrictionClick()
            }}
            className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300 cursor-pointer"
          >
            Isključivo 18+
          </button>
        </p>
      </div>
    </section>
  )
}
