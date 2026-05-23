import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { ChatWidgetPlaceholder } from "@/components/ChatWidgetPlaceholder";

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <SectionHeading
            eyebrow="Contact"
            title="Book a consultation."
            subtitle="Share your situation and Faith will help you identify the governing law, assess your risk, and design a tailored path forward."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]">
        <ContactForm />
        <div className="space-y-4 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Contact details
            </h2>
            <p className="mt-2 text-xs">
              Email: <span className="font-medium">info@waithira-law.example</span>
              <br />
              Phone: <span className="font-medium">+254 700 000 000</span>
              <br />
              Location: Nairobi · Remote consultations available
            </p>
          </div>
          <GoogleMapEmbed />
        </div>
      </section>

      <ChatWidgetPlaceholder />
    </>
  );
}
