import Image from "next/image"

export function StreameumLogo() {
  return (
    <div className="relative group">
      <Image
        src="/images/design-mode/star%20logo%20header.png"
        alt="Streameum"
        width={140}
        height={40}
        className="transition-all duration-300 group-hover:scale-105"
        style={{
          filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.2)) drop-shadow(0 0 8px rgba(192, 132, 252, 0.1))",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, rgba(192, 132, 252, 0.08) 50%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
    </div>
  )
}
