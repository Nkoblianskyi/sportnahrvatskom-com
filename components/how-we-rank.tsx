import { Shield, TrendingUp, Smartphone, CreditCard, Star, CheckCircle } from "lucide-react"

const rankingCriteria = [
  {
    id: 1,
    title: "Certifikacija i Legalnost",
    description:
      "Primarni korak u našoj procjeni jest verifikacija licenciranja. Svaka platforma mora posjedovati aktivnu dozvolu Ministarstva financija RH. Provjeravamo usklađenost s regulatornim standardima, politike kontroliranog klađenja i mehanizme zaštite igrača. Operateri koji ne zadovoljavaju ove standarde automatski se eliminiraju iz naših preporuka.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Konkurentnost Kvota",
    description:
      "Procjenjujemo razinu koeficijenata za najtraženije sportske lige i natjecanja uključujući nogomet, košarku, tenis i ostale ključne sportove. Uspoređujemo marže operatera i njihovu tržišnu konkurentnost. Povoljnije kvote direktno utječu na vaš potencijalni profit, stoga ovom segmentu posvećujemo posebnu pozornost.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Mobilno Korisničko Iskustvo",
    description:
      "U modernom dobu većina korisnika pristupa kladionicama putem mobilnih uređaja. Testiramo funkcionalnost mobilnih aplikacija za iOS i Android sustave, kao i responzivnost web stranica. Brzina učitavanja, intuitivnost navigacije, mogućnost klađenja uživo i stabilnost aplikacije ključni su faktori koje procjenjujemo.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Platne Opcije i Brzina Obrade",
    description:
      "Dostupnost raznih platnih metoda prilagođenih hrvatskom tržištu iznimno je bitna. Procjenjujemo podršku za kreditne kartice, bankovne transfere i elektroničke novčanike. Posebno testiramo brzinu obrade povlačenja dobitaka jer to direktno utječe na zadovoljstvo korisnika. Transparentnost naknada i jasnoća uvjeta isplate također se uzimaju u obzir.",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Služba za Korisnike",
    description:
      "Profesionalna korisnička služba dostupna na hrvatskom jeziku ključna je za pozitivno iskustvo. Testiramo dostupnost različitih kanala komunikacije uključujući live chat, email i telefonsku podršku. Procjenjujemo brzinu odgovora, kompetentnost osoblja i kvalitetu rješavanja problema.",
    icon: Star,
  },
  {
    id: 6,
    title: "Transparentnost Bonus Uvjeta",
    description:
      "Bonusi mogu biti atraktivni no moraju biti pravedni i ostvarivi. Detaljno analiziramo sve uvjete klađenja, vremenske rokove i ograničenja povezana s bonus ponudama. Provjeravamo transparentnost pravila i odsutnost skrivenih klauzula koje bi mogle ometati igrače.",
    icon: CheckCircle,
  },
]

export default function HowWeRank() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Metodologija Ocjenjivanja Kladionica</h2>

          <div className="prose prose-gray max-w-none">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Naša ekipa profesionalaca provodi detaljnu analizu svake platforme prema strogo definiranim kriterijima
              kako bismo vam predstavili isključivo najkvalitetnije i najpouzdanije opcije dostupne hrvatskim igračima.
              Proces evaluacije obuhvaća nekoliko ključnih područja koja zajedno formiraju cjelovitu sliku o kvalitetu
              usluge.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Certifikacija i Legalnost</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Primarni korak u našoj procjeni jest verifikacija licenciranja. Svaka platforma mora posjedovati aktivnu
              dozvolu Ministarstva financija RH. Provjeravamo usklađenost s regulatornim standardima, politike
              kontroliranog klađenja i mehanizme zaštite igrača. Operateri koji ne zadovoljavaju ove standarde
              automatski se eliminiraju iz naših preporuka.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Konkurentnost Kvota</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Procjenjujemo razinu koeficijenata za najtraženije sportske lige i natjecanja uključujući nogomet,
              košarku, tenis i ostale ključne sportove. Uspoređujemo marže operatera i njihovu tržišnu konkurentnost.
              Povoljnije kvote direktno utječu na vaš potencijalni profit, stoga ovom segmentu posvećujemo posebnu
              pozornost.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Mobilno Korisničko Iskustvo</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              U modernom dobu većina korisnika pristupa kladionicama putem mobilnih uređaja. Testiramo funkcionalnost
              mobilnih aplikacija za iOS i Android sustave, kao i responzivnost web stranica. Brzina učitavanja,
              intuitivnost navigacije, mogućnost klađenja uživo i stabilnost aplikacije ključni su faktori koje
              procjenjujemo.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Platne Opcije i Brzina Obrade</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Dostupnost raznih platnih metoda prilagođenih hrvatskom tržištu iznimno je bitna. Procjenjujemo podršku za
              kreditne kartice, bankovne transfere i elektroničke novčanike. Posebno testiramo brzinu obrade povlačenja
              dobitaka jer to direktno utječe na zadovoljstvo korisnika. Transparentnost naknada i jasnoća uvjeta
              isplate također se uzimaju u obzir.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Služba za Korisnike</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Profesionalna korisnička služba dostupna na hrvatskom jeziku ključna je za pozitivno iskustvo. Testiramo
              dostupnost različitih kanala komunikacije uključujući live chat, email i telefonsku podršku. Procjenjujemo
              brzinu odgovora, kompetentnost osoblja i kvalitetu rješavanja problema.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Transparentnost Bonus Uvjeta</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Bonusi mogu biti atraktivni no moraju biti pravedni i ostvarivi. Detaljno analiziramo sve uvjete klađenja,
              vremenske rokove i ograničenja povezana s bonus ponudama. Provjeravamo transparentnost pravila i odsutnost
              skrivenih klauzula koje bi mogle ometati igrače.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
