import Image from "next/image";
import Link from "next/link";

import { BenefitsSection } from "@/components/benefits-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ReviewsSection } from "@/components/reviews-section";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-stretch overflow-x-hidden overflow-y-auto">
      <header className="flex flex-col items-center">
        <div className="flex w-full max-w-334 flex-row items-baseline justify-between px-4 py-6 lg:py-12">
          <Logo />
          <nav className="hidden gap-10 font-clash-grotesk text-lg lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-clash-grotesk text-lg text-white transition-[color,opacity] duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ul
            aria-label="Social links"
            className="hidden flex-row gap-4 self-end pb-1.5 lg:flex"
          >
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={20}
                    height={20}
                    className="transition-opacity duration-200"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <MobileMenu />
        </div>
      </header>

      <main className="flex flex-col items-stretch">
        <HeroSection />
        <BenefitsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
