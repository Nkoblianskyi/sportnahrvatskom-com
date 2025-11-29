"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { firstListSites, type BettingSite } from "@/data/betting-sites"

export function FirstBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])

  useEffect(() => {
    setSites(firstListSites)
  }, [])

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

  const getBadgeText = (index: number) => {
    const badges = ["Elitni Izbor", "Premium Ponuda", "Izvrsna Ocjena", "Popularan Odabir"]
    return badges[index] || null
  }

  return (
    <section id="first-rankings" className="py-4 sm:py-4 w-full ">
      <div className="w-full max-w-[1080px] mx-auto">
        <div className="px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-5">
            {sites.map((site, index) => (
              <Card
                key={site.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn ${
                  index === 0 ? "border-2 border-primary shadow-md" : "border border-border hover:border-secondary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {index < 4 && (
                  <div
                    className={`w-full py-2 text-center font-medium text-sm tracking-wide ${
                      index === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {getBadgeText(index)}
                  </div>
                )}

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-0 h-full bg-card">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden">
                      <div className="grid grid-cols-2">
                        <div className="bg-muted p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                          <div className="p-3 rounded-md shadow-sm bg-foreground border border-border">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={160}
                              height={100}
                              className="h-12 max-w-full object-contain"
                            />
                          </div>

                          <div className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">{site.reviews} recenzija</div>
                            <div className="flex items-center justify-center gap-1">
                              {renderStars(site.rating, "w-3 h-3")}
                              <div className="ml-2 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm border border-border">
                                <span className="text-sm font-bold text-foreground">{site.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-card p-4 flex flex-col items-center justify-center space-y-3">
                          <div className="text-center">
                            <div className="text-primary mb-1 font-semibold text-base">Bonus Dobrodošlice</div>
                            <div className="text-lg font-bold text-foreground mb-1">{site.bonus}</div>
                            {site.dopBonus && (
                              <div className="text-foreground font-medium text-sm">{site.dopBonus}</div>
                            )}
                          </div>

                          <Button
                            className={`px-5 py-2 rounded-md font-semibold text-sm ${
                              index === 0
                                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                            }`}
                          >
                            PREUZMI BONUS
                          </Button>

                          <div className="text-sm font-semibold text-muted-foreground">{site.name}</div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex flex-col">
                      <div className="flex items-center h-full">
                        <div className="bg-card p-8 h-full flex items-center border-r border-border">
                          <div className="bg-foreground p-4 rounded-md shadow-sm mx-6 border border-border">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={180}
                              height={100}
                              className="h-24 max-w-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="flex-1 p-6 bg-card text-center">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="mb-2 font-semibold text-base text-muted-foreground">
                                Bonus Dobrodošlice
                              </div>
                              <div className="font-bold text-foreground mb-1 text-xl">{site.bonus}</div>
                              {site.dopBonus && (
                                <div className="text-foreground font-medium text-base">{site.dopBonus}</div>
                              )}
                            </div>

                            <div className="text-center mx-8 flex flex-col items-center gap-2">
                              <span className="font-bold text-primary text-3xl">{site.rating.toFixed(1)}</span>
                              <div className="text-xs text-muted-foreground">{site.reviews} recenzija</div>
                              <div className="flex items-center gap-1">{renderStars(site.rating, "w-4 h-4")}</div>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                              <Button
                                className={`px-8 py-6 rounded-md font-semibold text-base ${
                                  index === 0
                                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                }`}
                              >
                                PREUZMI BONUS
                              </Button>

                              <div className="text-base font-semibold text-muted-foreground">{site.name}</div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
