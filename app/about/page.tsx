import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "O Nama | sportnahrvatskom",
  description:
    "Upoznajte naš tim profesionalaca za sportsko klađenje i našu misiju pružanja vrhunskih analiza kladionica u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-secondary text-secondary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">O sportnahrvatskom</h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Vaš pouzdani navigator kroz svijet online sportskog klađenja u Hrvatskoj
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="space-y-12">
            {/* Mission Section */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Naša Vizija</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Na platformi <strong>sportnahrvatskom.com</strong>, naša temeljna vizija je pružiti hrvatskim
                ljubiteljima sporta i klađenja precizne, aktualne i objektivne informacije o elitnim online kladionicama
                dostupnim na domaćem tržištu. Vjerujemo u potpunu transparentnost, iskrenost u našim preporukama i
                promociju kontroliranog klađenja kao temelja zdrave industrije sportskog klađenja.
              </p>
            </section>

            {/* Team Section */}
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Tko Stoji Iza Nas?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Naš tim čine iskusni analitičari sportskog klađenja, profesionalci iz industrije igara na sreću i
                posvećeni istraživači koji temeljito testiraju i evaluiraju svaku kladionicu koju predstavljamo.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                S više od desetljeća kombiniranog iskustva u industriji online klađenja, posjedujemo znanje i ekspertizu
                potrebnu da vam pružimo pouzdane i provjerene preporuke prilagođene hrvatskim igračima.
              </p>
            </section>

            {/* Evaluation Process */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Proces Evaluacije Kladionica</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Naš proces recenziranja kladionica je sustavan i detaljan. Svaka platforma prolazi kroz sveobuhvatnu
                evaluaciju na temelju sljedećih kriterija:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Sigurnost i Certifikacija</h3>
                  <p className="text-muted-foreground text-sm">
                    Provjeravamo licenciranje i regulatorni status u Hrvatskoj
                  </p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Bonus Ponude</h3>
                  <p className="text-muted-foreground text-sm">
                    Kvaliteta i vrijednost bonusa dobrodošlice i promocija
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Sportska Ponuda</h3>
                  <p className="text-muted-foreground text-sm">Raznolikost sportskih tržišta i tipova oklada</p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Kvaliteta Kvota</h3>
                  <p className="text-muted-foreground text-sm">Konkurentnost kvota na popularne sportove</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Platne Metode</h3>
                  <p className="text-muted-foreground text-sm">Prilagođenost hrvatskim korisnicima</p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/10">
                  <h3 className="font-bold text-lg text-foreground mb-2">Korisnička Podrška</h3>
                  <p className="text-muted-foreground text-sm">Kvaliteta podrške na hrvatskom jeziku</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Redovito ažuriramo naše recenzije kako bismo osigurali da informacije ostanu aktualne i relevantne.
              </p>
            </section>

            {/* Responsible Gambling */}
            <section className="bg-secondary text-secondary-foreground rounded-lg p-8">
              <h2 className="text-3xl font-serif font-bold mb-4">Kontrolirano Klađenje</h2>
              <p className="leading-relaxed text-lg mb-4 text-secondary-foreground/90">
                Predani smo promociji kontroliranog klađenja kao ključnog aspekta naše platforme. Sve kladionice koje
                preporučujemo su licencirane i regulirane u skladu s hrvatskim zakonodavstvom.
              </p>
              <p className="leading-relaxed text-lg text-secondary-foreground/90">
                Ohrabrujemo sve naše posjetitelje da se klade odgovorno, postave granice i potraže pomoć ako primijete
                znakove problematičnog klađenja. Klađenje treba biti zabava, a ne problem.
              </p>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Kontaktirajte Nas</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Ako imate bilo kakva pitanja, prijedloge ili primjedbe, slobodno nas kontaktirajte:
              </p>
              <a
                href="mailto:info@sportnahrvatskom.com"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-3 rounded-md transition-colors"
              >
                info@sportnahrvatskom.com
              </a>
              <p className="text-muted-foreground mt-4">
                Cijenimo vaše povratne informacije i uvijek težimo unapređenju našeg servisa.
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
