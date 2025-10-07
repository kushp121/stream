"use client"

import Image from "next/image"

export function BackgroundAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
        <Image
          src="/images/streameum-star.png"
          alt=""
          width={800}
          height={800}
          className="opacity-40 animate-pulse-glow"
          style={{
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow animate-bounce-subtle" />
      <div
        className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow animate-bounce-subtle"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow animate-bounce-subtle"
        style={{ animationDelay: "2s" }}
      />

      {/* Audio wave visualization */}
      <div className="absolute bottom-0 left-0 right-0 flex h-32 items-end justify-center gap-1 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-primary via-secondary to-accent animate-wave"
            style={{
              height: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
