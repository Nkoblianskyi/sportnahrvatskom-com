"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-center h-20 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-serif font-bold uppercase tracking-wide transition-transform duration-300 group-hover:scale-105">
            <span className="text-[#FF0000]">SPORT</span>
            <span className="text-foreground">NA</span>
            <span className="text-[#0D5EAF]">HRVATSKOM</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
