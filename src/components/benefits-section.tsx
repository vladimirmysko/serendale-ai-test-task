import {
  ArrowsPointingOutIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const benefits = [
  {
    icon: BoltIcon,
    heading: "Lightning Fast",
    description:
      "120K TPS blockchain throughput — transactions settle in milliseconds, not minutes.",
  },
  {
    icon: ShieldCheckIcon,
    heading: "AI-Powered Security",
    description:
      "Our AI continuously monitors and adapts to emerging threats, keeping data provably secure.",
  },
  {
    icon: CubeTransparentIcon,
    heading: "Truly Decentralized",
    description:
      "No central authority, no single point of failure. Your data and assets stay under your control.",
  },
  {
    icon: ArrowTrendingUpIcon,
    heading: "Proof of Stake",
    description:
      "Energy-efficient consensus that rewards participation while maintaining network integrity at scale.",
  },
  {
    icon: ArrowsPointingOutIcon,
    heading: "Infinitely Scalable",
    description:
      "Architecture designed to grow with global demand without sacrificing speed or decentralization.",
  },
  {
    icon: CodeBracketIcon,
    heading: "Open Protocol",
    description:
      "Build on a permissionless foundation with open APIs, SDKs, and comprehensive developer docs.",
  },
];

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="w-full px-4 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-334">
        <h2
          id="benefits-title"
          className="mb-12 text-center font-montserrat text-2xl font-medium tracking-widest uppercase lg:text-3xl"
        >
          <span className="bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            Built for the Future
          </span>
        </h2>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, heading, description }) => (
            <li
              key={heading}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8"
            >
              <div
                aria-hidden="true"
                className="mb-4 w-fit rounded-xl bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] p-0.5"
              >
                <div className="rounded-[10px] bg-black p-2.5">
                  <Icon aria-hidden="true" className="size-6 text-white" />
                </div>
              </div>
              <h3 className="mb-2 font-montserrat text-lg font-medium">
                {heading}
              </h3>
              <p className="font-montserrat text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
