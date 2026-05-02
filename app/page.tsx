export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For SaaS Support Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-tag support tickets by{" "}
          <span className="text-[#58a6ff]">urgency and type</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect email, Slack, and chat. AI classifies every ticket instantly — bug, billing, feature, or general — and flags critical issues before they escalate.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Real-time classification","Urgency scoring","Auto-routing","Webhook integrations","Email + Slack + Chat"].map(f => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to triage faster</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited ticket classification",
              "4 urgency levels + 4 ticket types",
              "Email, Slack & chat integrations",
              "Webhook endpoints for any tool",
              "Real-time dashboard with filters",
              "Auto-routing rules"
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which support channels does it connect to?</h3>
            <p className="text-sm text-[#8b949e]">Customer Support Tagger integrates with email inboxes, Slack channels, and live chat tools via webhooks. Any platform that can send a webhook or email forward is supported.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How accurate is the AI classification?</h3>
            <p className="text-sm text-[#8b949e]">Powered by OpenAI, the classifier achieves high accuracy on urgency (low/medium/high/critical) and type (bug/feature/billing/general). You can review and correct tags to improve future results.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I route tickets to specific team members automatically?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Set up auto-routing rules based on ticket type or urgency level to assign tickets to the right agent or queue the moment they arrive.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Customer Support Tagger. All rights reserved.
      </footer>
    </main>
  )
}
