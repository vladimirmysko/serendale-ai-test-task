import { cn } from "@/lib/utils";

interface Review {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  rating: 4 | 5;
  body: string;
  datePublished: string;
}

const reviews: Review[] = [
  {
    id: "review-1",
    name: "Marcus Chen",
    initials: "MC",
    role: "Senior DeFi Developer",
    company: "Axiom Protocol",
    rating: 5,
    body: "Serendale AI has completely transformed how we build DeFi protocols. The AI-driven security layer caught three critical vulnerabilities before mainnet launch that our own auditors missed. The 120K TPS throughput is not marketing — we've stress-tested it under real load.",
    datePublished: "2025-11-04",
  },
  {
    id: "review-2",
    name: "Priya Nair",
    initials: "PN",
    role: "Blockchain Security Auditor",
    company: "ChainGuard Labs",
    rating: 5,
    body: "As a security auditor I'm deeply skeptical of AI security claims, but the threat-detection accuracy here is genuinely impressive. The on-chain audit trails are immutable and the anomaly detection models adapt in real time. This is what serious infrastructure looks like.",
    datePublished: "2025-10-18",
  },
  {
    id: "review-3",
    name: "Tobias Schmidt",
    initials: "TS",
    role: "Validator Node Operator",
    company: "Distributed Horizons",
    rating: 4,
    body: "Running validators on Serendale has been rock-solid for eight months. Proof-of-Stake rewards are consistent and the documentation for node setup is actually good — rare in this space. Knocking one star only because the monitoring dashboard still lacks a few alerting options I'd like.",
    datePublished: "2025-09-30",
  },
  {
    id: "review-4",
    name: "Aisha Okonkwo",
    initials: "AO",
    role: "CTO",
    company: "NovaMesh Ventures",
    rating: 5,
    body: "We evaluated five L1 blockchains before committing our infrastructure to Serendale. The combination of decentralized architecture and AI-based data sovereignty was the deciding factor. Our transaction costs dropped 60% and settlement latency went from minutes to milliseconds.",
    datePublished: "2025-12-01",
  },
  {
    id: "review-5",
    name: "Lena Volkova",
    initials: "LV",
    role: "Protocol Research Engineer",
    company: "Consensus Labs",
    rating: 5,
    body: "The open protocol approach and permissionless APIs made integration effortless. I had a working proof-of-concept in an afternoon using the SDK. The research team has clearly thought deeply about the scalability trilemma — the architecture decisions are sound and well documented.",
    datePublished: "2025-11-22",
  },
  {
    id: "review-6",
    name: "Daniel Park",
    initials: "DP",
    role: "Head of Web3 Infrastructure",
    company: "Stratum Finance",
    rating: 4,
    body: "Migrating our trading infrastructure to Serendale was smoother than expected. The infinite scalability promise holds up under our peak order volumes. Support response times are excellent. Would give five stars once the cross-chain bridge tooling reaches feature parity with the core stack.",
    datePublished: "2025-10-07",
  },
];

function StarRating({ rating }: { rating: 4 | 5 }) {
  return (
    <div aria-label={`${rating} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className={cn("size-4", i < rating ? "text-[#FF3BFF]" : "text-white/20")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Serendale AI",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
    reviewBody: r.body,
    datePublished: r.datePublished,
  })),
};

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-title" className="w-full px-4 py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-334">
        <h2
          id="reviews-title"
          className="mb-6 text-center font-montserrat text-2xl font-medium tracking-widest uppercase lg:text-3xl"
        >
          <span className="bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
            What Builders Say
          </span>
        </h2>

        <div className="mb-12 flex items-center justify-center gap-3">
          <StarRating rating={5} />
          <span className="font-montserrat text-sm text-white/60">
            <span className="font-medium text-white">4.7</span> average across{" "}
            <span className="font-medium text-white">6 reviews</span>
          </span>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8"
            >
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="shrink-0 rounded-full bg-[linear-gradient(to_right,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)] p-0.5"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-black">
                    <span className="font-montserrat text-xs font-medium text-white/80">
                      {review.initials}
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="truncate font-montserrat text-sm font-medium text-white">
                    {review.name}
                  </p>
                  <p className="truncate font-montserrat text-xs text-white/50">
                    {review.role} · {review.company}
                  </p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="flex-1 font-montserrat text-sm leading-relaxed text-white/60">
                {review.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
