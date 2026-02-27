import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { navigation } from "@/data/navigation";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-stretch overflow-x-hidden overflow-y-auto">
      <header className="flex flex-col items-center">
        <div className="flex w-full max-w-334 flex-row items-baseline justify-between px-4 py-12">
          <Logo />
          <nav className="hidden gap-10 font-clash-grotesk text-lg lg:flex">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
          <ul className="hidden flex-row gap-4 self-end pb-1.5 lg:flex">
            <li>
              <Link href="#">
                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="/reddit.svg" alt="Reddit" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
          <MobileMenu />
        </div>
      </header>

      <main className="flex flex-col items-stretch pt-41.5">
        <div className="flex flex-col items-center px-4">
          <h1 className="text-center font-montserrat text-[80px] leading-none font-medium tracking-[0.02em]">
            <span className="bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] bg-clip-text text-transparent uppercase [-webkit-background-clip:text]">
              DECENTRALIZED INTELLIGENCE.
            </span>
            <br />
            <span>Scalable.</span>
          </h1>
          <p className="mt-1.5 max-w-180.75 text-center font-montserrat text-xl leading-8.25 tracking-[0.72px]">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="rounded-full bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] p-0.5">
              <Link
                href="#"
                className="block rounded-full bg-black px-8 py-5.5 font-space-grotesk text-xl"
              >
                Get started
              </Link>
            </div>
            <Link
              href="#"
              className="rounded-full border-2 bg-black px-8 py-5.5 font-space-grotesk text-xl"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="z-[-1] -mt-15.5 flex w-full flex-col items-center">
          <div className="relative aspect-[2.59/1] w-full max-w-402.25">
            <Image
              src="/hero-image.webp"
              alt="Hero Image"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
