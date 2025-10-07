"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MeetingForm() {
  const [earningThreshold, setEarningThreshold] = useState<"yes" | "no">("yes")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    alert("Thank you! We'll be in touch soon.")
  }

  return (
    <div className="relative rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm sm:p-6 md:p-8">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-50 blur-xl" />

      <form onSubmit={handleSubmit} className="relative space-y-4 md:space-y-5">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium">
            First name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Name"
            required
            className="bg-background/50 border-border/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Name"
            required
            className="bg-background/50 border-border/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="spotifyLink" className="text-sm font-medium">
            Spotify link
          </Label>
          <Input
            id="spotifyLink"
            name="spotifyLink"
            type="url"
            placeholder="Spotify Link"
            required
            className="bg-background/50 border-border/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@email.com"
            required
            className="bg-background/50 border-border/50"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Do you make $2k or more per year from streaming?</Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setEarningThreshold("yes")}
              className={`rounded-md border px-4 py-2.5 text-sm font-medium transition-all ${
                earningThreshold === "yes"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 bg-background/50 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setEarningThreshold("no")}
              className={`rounded-md border px-4 py-2.5 text-sm font-medium transition-all ${
                earningThreshold === "no"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 bg-background/50 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              No
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
          size="lg"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">Trusted by independent artists worldwide.</p>
      </form>
    </div>
  )
}
