"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-lg font-serif font-semibold text-foreground">O Nama i Oglašavanju</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-secondary/10 border-l-4 border-secondary p-3 rounded-r-md">
            <p className="text-sm text-foreground">
              <strong>sportnahrvatskom.com</strong> je neovisna platforma za usporedbu kladionica u Hrvatskoj. Naša
              misija je pomoći vam pronaći optimalne opcije za online klađenje.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Kako ostvarujemo prihod:</h3>
            <p className="text-sm text-muted-foreground">
              Ostvarujemo proviziju kada se registrirate kod naših partnerskih kladionica putem naših poveznica. To nam
              omogućuje održavanje besplatnog servisa i kontinuirano unapređenje naše platforme.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Naša jamstva:</h3>
            <p className="text-sm text-muted-foreground">
              ✓ Surađujemo isključivo s licenciranim operaterima
              <br />✓ Naše ocjene i recenzije ostaju potpuno neovisne
              <br />✓ Promičemo kontrolirano klađenje i zaštitu igrača
              <br />✓ Sve informacije su transparentne i verificirane
            </p>
          </div>

          <div className="bg-muted p-3 rounded-md border border-border">
            <p className="text-xs text-muted-foreground font-medium">
              Klađenje nosi rizik. Igrajte kontrolirano i samo ono što si možete priuštiti izgubiti. Za pomoć posjetite{" "}
              <span className="text-primary">odgovorno-kladenje.hr</span>
            </p>
          </div>

          <Button onClick={onClose} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Razumijem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
