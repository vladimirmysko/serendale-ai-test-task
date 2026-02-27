import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

const gradientText =
  "bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] bg-clip-text text-transparent [-webkit-background-clip:text]";

export function Footer() {
  return (
    <footer aria-label="Site footer">
      <div
        aria-hidden="true"
        className="h-px w-full bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]"
      />

      <div className="mx-auto max-w-334 px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="font-montserrat text-sm text-white/60">
              The future of decentralized intelligence.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <nav aria-label="Footer navigation">
            <h2
              className={`mb-6 font-montserrat text-xs font-medium tracking-widest uppercase ${gradientText}`}
            >
              Explore
            </h2>
            <ul className="flex list-none flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative font-clash-grotesk text-sm text-white/60 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Connect */}
          <div>
            <h2
              className={`mb-6 font-montserrat text-xs font-medium tracking-widest uppercase ${gradientText}`}
            >
              Connect
            </h2>
            <ul className="flex list-none flex-col gap-3">
              <li>
                <Link
                  href="mailto:hello@serendale.ai"
                  className="relative font-montserrat text-sm text-white/60 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
                >
                  hello@serendale.ai
                </Link>
              </li>
              {socialLinks.map(({ name, icon, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-row items-center gap-2 font-montserrat text-sm text-white/60 transition-[color] duration-200 hover:text-white"
                  >
                    <Image
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      width={16}
                      height={16}
                      className="opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/6 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-row gap-6">
              <Link
                href="#"
                className="relative font-montserrat text-xs text-white/50 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white/80 after:transition-[width] after:duration-300 after:content-[''] hover:text-white/80 hover:after:w-full"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="relative font-montserrat text-xs text-white/50 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white/80 after:transition-[width] after:duration-300 after:content-[''] hover:text-white/80 hover:after:w-full"
              >
                Terms of Service
              </Link>
            </div>
            <p className="font-montserrat text-xs text-white/50">
              © 2026 Serendale AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
