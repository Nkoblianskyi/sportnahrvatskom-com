"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-serif font-semibold text-foreground">
            Dobno Ograničenje - 18+
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-center">
          <div className="bg-destructive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto border border-destructive/20">
            <span className="text-2xl font-bold text-destructive">18+</span>
          </div>

          <div className="space-y-3">
            <p className="text-base font-semibold text-foreground">
              Online klađenje rezervirano je isključivo za osobe starije od 18 godina
            </p>
            <p className="text-sm text-muted-foreground">
              Pristupom ovoj platformi i korištenjem naših usluga potvrđujete da imate navršenih 18 godina ili više.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-3 rounded-md">
            <p className="text-xs text-foreground font-medium">
              Klađenje može izazvati ovisnost. Igrajte kontrolirano i potražite pomoć ako imate poteškoća s upravljanjem
              klađenjem.
            </p>
          </div>

          <div className="text-xs text-muted-foreground border-t border-border pt-3 space-y-1">
            <p className="font-medium">Za pomoć i podršku:</p>
            <p>Besplatna linija: 0800-1234</p>
            <p>odgovorno-kladenje.hr</p>
          </div>

          <Button onClick={onClose} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Potvrđujem da imam 18+ godina
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
