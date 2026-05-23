import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="Services"
            title="Tailored legal risk management and compliance solutions"
            subtitle="Faith provides practical, anticipatory, and context-aware legal support designed to safeguard your operations and reputation."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
        <ServiceCard
          href="/services/legal-risk-management"
          title="Legal risk management"
          description="Identify, prioritize, and mitigate legal risks across your operations, contracts, and relationships."
        />
        <ServiceCard
          href="/services/compliance-advisory"
          title="Compliance advisory"
          description="Understand and implement regulatory requirements in a way that is practical and sustainable."
        />
        <ServiceCard
          href="/services/contracts-and-transactions"
          title="Contracts & transactions"
          description="Draft, review, and negotiate agreements that protect your interests and anticipate future challenges."
        />
      </section>
    </>
  );
}
