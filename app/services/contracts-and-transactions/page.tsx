import { SectionHeading } from "@/components/SectionHeading";

export default function ContractsTransactionsPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="Service"
            title="Contracts & transactions"
            subtitle="Draft, review, and negotiate agreements that protect your interests."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 space-y-10 text-sm text-slate-700">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">What this covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Drafting and reviewing commercial agreements</li>
            <li>Negotiating terms that align with your strategy</li>
            <li>Identifying regulatory implications in transactions</li>
            <li>Anticipating future disputes and protecting your position</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Outcomes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contracts that safeguard your interests</li>
            <li>Reduced risk of disputes and non-compliance</li>
            <li>Clear, enforceable terms aligned with your goals</li>
            <li>Confidence in negotiations and transactions</li>
          </ul>
        </div>
      </section>
    </>
  );
}
