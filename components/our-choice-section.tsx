"use client"

import { firstListSites } from "@/data/betting-sites"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export function OurChoiceSection() {
  const topSite = firstListSites[0]

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        return <Star key={i} className={`${className} fill-primary text-primary`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-muted-foreground/30 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-primary text-primary`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${className} text-muted-foreground/30`} />
      }
    })
  }

  return (
    <section className="py-16 sm:py-20 w-full bg-card">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Naš Elitni Odabir</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nakon temeljite analize i testiranja svih vodećih hrvatskih kladionica, naša ekipa stručnjaka izdvojila je
            optimalnu platformu za sportsko klađenje. Ovaj izbor temelji se na sigurnosti, kvaliteti usluge,
            atraktivnosti bonusa i cjelokupnom korisničkom doživljaju.
          </p>
        </div>

        <Card className="overflow-hidden transition-all duration-300 border-2 border-primary shadow-md">
          <div className="w-full bg-primary text-primary-foreground py-2.5 text-center font-semibold text-sm tracking-wide">
            Elitni Izbor
          </div>

          <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
            <CardContent className="p-0 h-full bg-card">
              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-muted p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                    <div className="p-3 rounded-md shadow-sm bg-foreground border border-border">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={160}
                        height={100}
                        className="h-12 max-w-full object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">{topSite.reviews} recenzija</div>
                      <div className="flex items-center justify-center gap-1">
                        {renderStars(topSite.rating, "w-3 h-3")}
                        <div className="ml-2 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm border border-border">
                          <span className="text-sm font-bold text-foreground">{topSite.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-4 flex flex-col items-center justify-center space-y-3">
                    <div className="text-center">
                      <div className="text-primary mb-1 font-semibold text-base">Bonus Dobrodošlice</div>
                      <div className="text-lg font-bold text-foreground mb-1">{topSite.bonus}</div>
                      {topSite.dopBonus && (
                        <div className="text-foreground font-medium text-sm">{topSite.dopBonus}</div>
                      )}
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md font-semibold">
                      PREUZMI BONUS
                    </Button>

                    <div className="text-sm font-semibold text-muted-foreground">{topSite.name}</div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col">
                <div className="flex items-center h-full">
                  <div className="bg-card p-8 h-full flex items-center border-r border-border">
                    <div className="bg-foreground p-4 rounded-md shadow-sm mx-6 border border-border">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={100}
                        className="h-24 max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-6 bg-card text-center">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-primary mb-2 font-semibold text-base">Bonus Dobrodošlice</div>
                        <div className="text-xl font-bold text-foreground mb-1">{topSite.bonus}</div>
                        {topSite.dopBonus && (
                          <div className="text-foreground font-medium text-base">{topSite.dopBonus}</div>
                        )}
                      </div>

                      <div className="text-center mx-8 flex flex-col items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{topSite.rating.toFixed(1)}</span>
                        <div className="text-xs text-muted-foreground">{topSite.reviews} recenzija</div>
                        <div className="flex items-center gap-1">{renderStars(topSite.rating, "w-4 h-4")}</div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-md font-semibold text-base">
                          PREUZMI BONUS
                        </Button>

                        <div className="text-base font-semibold text-muted-foreground">{topSite.name}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-muted py-2 text-center text-xs text-muted-foreground border-t border-border">
                  18+ | Odgovorno klađenje | SRIJ
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">{topSite.terms}</div>
      </div>
    </section>
  )
}
