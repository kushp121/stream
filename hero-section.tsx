"use client"

import { MeetingForm } from "@/components/meeting-form"
import { TrustMarkers } from "@/components/trust-markers"

export function HeroSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Left side - Headline */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-6">
          <h1
            className="font-sans text-4xl font-bold lowercase leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            partner with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-text-shimmer">
              streameum.
            </span>
          </h1>
          <p
            className="text-lg lowercase text-muted-foreground sm:text-xl md:text-2xl text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            sell your catalog. secure funding. scale your career.
          </p>
        </div>

        {/* Right side - Form */}
        <div
          className="flex flex-col justify-center animate-slide-in-right"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <MeetingForm />
        </div>
      </div>

      {/* Trust markers */}
      <div className="mt-12 md:mt-16 lg:mt-24 animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
        <TrustMarkers />
      </div>
    </section>
  )
}
