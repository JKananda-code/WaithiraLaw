import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { ChatWidgetPlaceholder } from "@/components/ChatWidgetPlaceholder";

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
              Legal risk & compliance consultancy
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Turning legal hurdles into strategic opportunities.
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Waithira Kamau Mwangi Advocate is a legal consultant dedicated to
              solving complex legal challenges, crafting customized solutions,
              and safeguarding your operations and reputation through thoughtful
              legal risk management and compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-900 transition"
              >
                Book a consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-brand-accent hover:text-brand-accent transition"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Law as the invisible thread
              </h2>
              <p className="mt-2">
                For Waithira, the law isn’t just a tool—it is the centerpiece of
                everything in life. She excels in finding the law that governs
                your situation, then crafting customized legal risk management
                and compliance solutions that keep you ahead of potential
                challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-semibold text-slate-900">
                  Legal risk management
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Identify, assess, and mitigate legal risk before it becomes a
                  crisis.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="text-xs font-semibold text-slate-900">
                  Compliance advisory
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Navigate regulatory landscapes with clarity and confidence.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 col-span-2">
                <p className="text-xs font-semibold text-slate-900">
                  Tailored solutions
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Custom frameworks aligned with your operations, sector, and
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading
          eyebrow="Services"
          title="Customized legal risk management and compliance solutions."
          subtitle="Whether you are an individual, a niche business, or an organization, Faith designs legal solutions that fit your reality."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="Client confidence"
            title="Trusted by clients navigating complex legal landscapes."
            subtitle="Faith works with individuals, SMEs, startups, and organizations in regulated sectors to build legal resilience."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="Faith translated a complex regulatory issue into a clear roadmap. We avoided penalties and strengthened our internal processes."
              name="Operations Lead"
              role="Regulated SME"
            />
            <Testimonial
              quote="Her approach is practical, anticipatory, and deeply tailored to our business model. We now treat legal risk as strategy, not fear."
              name="Founder"
              role="Tech startup"
            />
            <Testimonial
              quote="Faith helped us design compliance frameworks that our team actually understands and uses."
              name="Director"
              role="Non-profit organization"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Ready to turn legal complexity into clarity?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Share your situation and Faith will help you identify the
              governing law, assess your risk, and design a tailored path
              forward.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-900 transition"
            >
              Book a consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-brand-accent hover:text-brand-accent transition"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <ChatWidgetPlaceholder />
    </>
  );
}







