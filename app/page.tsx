import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground pt-20 md:pt-24">
      <BackgroundAnimation />
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}
