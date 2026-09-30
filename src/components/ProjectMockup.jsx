export default function ProjectMockup({ project }) {
  if (project.id === 'doccure') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col shadow-sm select-none">
        {/* Browser Top Bar */}
        <div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E15B52]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5AA3D]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EBE68]/80 inline-block" />
          </div>
          <div className="px-3 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono tracking-tight text-[var(--muted)] flex items-center gap-1.5 max-w-[200px] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            doccure-ecru.vercel.app
          </div>
          <div className="w-10" />
        </div>

        {/* UI Content Preview */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[var(--surface)] to-[var(--surface-elevated)]">
          {/* App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent)] text-[var(--accent-text)] flex items-center justify-center font-bold text-xs">
                +
              </div>
              <span className="font-semibold text-sm tracking-tight text-[var(--text)]">DocCure Health</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20">
              Verified Doctors
            </span>
          </div>

          {/* Booking Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wider">Next Session</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs font-bold text-[var(--text)] leading-tight">Dr. Sarah Jenkins</p>
              <p className="text-[11px] text-[var(--muted)]">Cardiology Specialist · 4.9 ★</p>
              <div className="pt-1 flex items-center justify-between text-[11px] border-t border-[var(--border-subtle)] text-[var(--text)]">
                <span>Today, 3:30 PM</span>
                <span className="font-semibold text-[var(--accent)]">Paid via Stripe</span>
              </div>
            </div>

            <div className="hidden sm:flex p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider">Available Slots</span>
                <p className="text-xs font-medium text-[var(--text)] mt-1">Select Consultation Time</p>
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-2">
                <span className="text-[10px] text-center py-1 rounded bg-[var(--accent)] text-[var(--accent-text)] font-medium">10:00 AM</span>
                <span className="text-[10px] text-center py-1 rounded border border-[var(--border)] text-[var(--muted)]">11:30 AM</span>
                <span className="text-[10px] text-center py-1 rounded border border-[var(--border)] text-[var(--muted)]">02:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <span>Patient Portal</span>
              <span>•</span>
              <span>Doctor Schedule</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Admin Dashboard</span>
            </div>
            <span className="font-mono text-[10px] text-[var(--accent)]">MERN Stack + Stripe</span>
          </div>
        </div>
      </div>
    )
  }

  if (project.id === 'rag') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col shadow-sm select-none">
        {/* Browser Top Bar */}
        <div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E15B52]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5AA3D]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EBE68]/80 inline-block" />
          </div>
          <div className="px-3 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono tracking-tight text-[var(--muted)] flex items-center gap-1.5 max-w-[200px] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            rag-intelligence.internal
          </div>
          <div className="w-10" />
        </div>

        {/* UI Content Preview */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[var(--surface)] to-[var(--surface-elevated)]">
          {/* Header & Indexed doc */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-[var(--accent)] text-[var(--accent-text)]">
                RAG
              </span>
              <span className="font-semibold text-sm tracking-tight text-[var(--text)]">Document Intelligence</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20 font-mono">
              Qdrant Vector DB
            </span>
          </div>

          {/* Interactive Chat & Retrieval Pane */}
          <div className="space-y-2.5 my-3">
            <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pb-1.5">
                <span className="font-mono text-[var(--accent)]">User Prompt</span>
                <span>Document: Annual_Report_2025.pdf</span>
              </div>
              <p className="text-xs text-[var(--text)] font-medium">
                "What was the net cloud infrastructure revenue growth rate?"
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-subtle)]/40 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-[var(--accent)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
                  Synthesized Answer with Sources
                </span>
                <span className="text-[10px] font-mono text-[var(--muted)]">Cosine Similarity: 0.94</span>
              </div>
              <p className="text-xs text-[var(--text)] leading-relaxed">
                Cloud infrastructure grew by <strong>34.2% YoY</strong>, driven by enterprise AI adoption and vector database clusters.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[10px] text-[var(--accent)] font-mono">
                <span className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">[Source 1: Page 14 §2]</span>
                <span className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)]">[Source 2: Table 4.1]</span>
              </div>
            </div>
          </div>

          {/* Bottom Engine Specs */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--muted)]">
            <span>FastAPI + LangChain + Hugging Face</span>
            <span className="font-mono text-[10px] text-[var(--accent)]">Fast Vector Retrieval</span>
          </div>
        </div>
      </div>
    )
  }

  if (project.id === 'jewels') {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col shadow-sm select-none">
        {/* Browser Top Bar */}
        <div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E15B52]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5AA3D]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5EBE68]/80 inline-block" />
          </div>
          <div className="px-3 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono tracking-tight text-[var(--muted)] flex items-center gap-1.5 max-w-[200px] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            jewelsforjoy.store
          </div>
          <div className="w-10" />
        </div>

        {/* UI Content Preview */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[var(--surface)] to-[var(--surface-elevated)]">
          {/* Brand header */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
            <span className="font-serif italic text-base tracking-wide text-[var(--text)]">Jewels For Joy</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[11px] text-[var(--muted)] hidden sm:inline">Rings · Necklaces · Bridal</span>
              <span className="px-2 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-[11px] font-medium border border-[var(--accent)]/20">
                Cart (2)
              </span>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] space-y-2">
              <div className="w-full h-16 sm:h-20 rounded bg-gradient-to-br from-amber-100/40 via-amber-50/20 to-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-[var(--text)]">Aura Gold Band</span>
                <span className="text-[11px] font-mono font-medium text-[var(--accent)]">$280</span>
              </div>
              <p className="text-[10px] text-[var(--muted)] line-clamp-1">18k Handcrafted Gold</p>
            </div>

            <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] space-y-2">
              <div className="w-full h-16 sm:h-20 rounded bg-gradient-to-br from-emerald-100/30 via-slate-50/20 to-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                <span className="text-xl">💎</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-[var(--text)]">Solitaire Pendant</span>
                <span className="text-[11px] font-mono font-medium text-[var(--accent)]">$450</span>
              </div>
              <p className="text-[10px] text-[var(--muted)] line-clamp-1">Ethical Diamond Cut</p>
            </div>
          </div>

          {/* Storefront Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--muted)]">
            <span>Next.js · React · MongoDB</span>
            <span className="font-mono text-[10px] text-[var(--accent)]">Admin Inventory Sync</span>
          </div>
        </div>
      </div>
    )
  }

  // Fallback: Shopzy
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col shadow-sm select-none">
      {/* Browser Top Bar */}
      <div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E15B52]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5AA3D]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#5EBE68]/80 inline-block" />
        </div>
        <div className="px-3 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono tracking-tight text-[var(--muted)] flex items-center gap-1.5 max-w-[200px] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          shopzy-storefront.dev
        </div>
        <div className="w-10" />
      </div>

      {/* UI Content Preview */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[var(--surface)] to-[var(--surface-elevated)]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-[var(--text)]">SHOPZY.</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)]">
              Modular Catalog
            </span>
          </div>
          <span className="text-[11px] text-[var(--accent)] font-semibold">120+ Products</span>
        </div>

        {/* Filter Bar & Grid */}
        <div className="my-3 space-y-2.5">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-semibold">All Items</span>
            <span className="px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">Electronics</span>
            <span className="px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">Apparel</span>
            <span className="px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">Accessories</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text)]">Noise-Canceling Pods</span>
              <span className="text-xs font-mono font-bold text-[var(--accent)]">$129</span>
            </div>
            <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text)]">Minimalist Smartwatch</span>
              <span className="text-xs font-mono font-bold text-[var(--accent)]">$199</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--muted)]">
          <span>React · Vite · Tailwind CSS</span>
          <span className="font-mono text-[10px] text-[var(--accent)]">Multi-Filter Architecture</span>
        </div>
      </div>
    </div>
  )
}
