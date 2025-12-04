// components/empower-workflow.tsx
import { Button } from "@/components/ui/button"; // shadcn button (optional)
import { cn } from "@/lib/utils";

export function EmpowerWorkflowSection() {
  return (
    <section className="w-full bg-[#050509] py-20 md:py-28">
      <div className="mx-auto max-w-full px-4 md:px-6">
        {/* Outer card */}
        <div
          className={cn(
            "relative overflow-hidden rounded-none border border-neutral-800/80",
            "bg-gradient-to-b from-neutral-900/80 via-neutral-950 to-black",
            "shadow-[0_0_120px_rgba(0,0,0,0.8)]"
          )}
        >
          {/* Vertical stripe background (like the screenshot) */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-neutral-800/70" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.7)_1px,transparent_1px)] [background-size:18px_100%]" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12">
            {/* Heading */}
            <div className="mb-10 text-center md:mb-12">
              <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">
                Empower Your Workflow with AI
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-400 md:mx-auto md:text-sm">
                Ask your AI Agent for real-time collaboration, seamless
                integrations, and actionable insights to streamline your
                operations.
              </p>
            </div>

            {/* 2 x 2 grid */}
            <div className="grid gap-0 md:grid-cols-2 md:gap-0">
              {/* Top-left: Chat / collaboration card */}
              <div className="relative overflow-hidden rounded-none border border-neutral-800/80 bg-gradient-to-b from-neutral-900/70 to-neutral-950/90 p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Real-time AI Collaboration
                </div>

                <div className="space-y-3">
                  {/* Blue bubble */}
                  <div className="inline-flex max-w-xs rounded-2xl bg-sky-600/90 px-3 py-2 text-xs text-sky-50 shadow-[0_18px_40px_rgba(56,189,248,0.35)]">
                    Hey, I need help scheduling a team meeting that works for
                    everyone. Any suggestions for finding an optimal time slot?
                  </div>

                  {/* Reply bubble */}
                  <div className="flex gap-2">
                    <div className="mt-4 h-7 w-7 flex-shrink-0 rounded-full bg-neutral-700/70 ring-2 ring-neutral-800" />
                    <div className="rounded-2xl bg-neutral-900/80 px-3 py-2 text-xs text-neutral-300">
                      Based on your calendar patterns and preferences, I
                      recommend scheduling the team meeting for Tuesday at 2pm.
                      This time slot has the highest attendance rate and avoids
                      conflicts with other recurring meetings.
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-right: Integrations / orbit visual */}
              <div className="relative overflow-hidden rounded-none border border-neutral-800/80 bg-gradient-to-b from-neutral-900/50 to-neutral-950/90 p-5 md:p-6">
                <div className="mb-4 text-xs font-medium text-neutral-400">
                  Seamless Integrations
                </div>

                <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-b from-neutral-900 to-black shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                  {/* Concentric rings */}
                  <div className="absolute inset-4 rounded-full border border-neutral-800/80" />
                  <div className="absolute inset-8 rounded-full border border-neutral-800/60" />
                  <div className="absolute inset-12 rounded-full border border-neutral-800/40" />

                  {/* Center node */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                    AI
                  </div>

                  {/* Dots / logos */}
                  <div className="absolute -top-1 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-neutral-200">
                    Figma
                  </div>
                  <div className="absolute top-1/2 -right-2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-neutral-200">
                    Slack
                  </div>
                  <div className="absolute bottom-0 left-4 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-neutral-200">
                    Notion
                  </div>
                  <div className="absolute bottom-4 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-neutral-200">
                    Jira
                  </div>
                </div>

                <p className="mt-4 text-xs text-neutral-400">
                  Connect your favorite tools and keep your workflows aligned
                  without context switching.
                </p>
              </div>

              {/* Bottom-left: Insight graph */}
              <div className="relative overflow-hidden rounded-none border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 p-5 md:p-6">
                <div className="mb-4 text-xs font-medium text-neutral-400">
                  Instant Insight Reporting
                </div>

                <div className="relative mt-2 h-32 overflow-hidden rounded-xl bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent">
                  {/* Simple SVG graph */}
                  <svg
                    viewBox="0 0 260 120"
                    className="absolute inset-0 h-full w-full opacity-90"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="#0f172a"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 90 C 40 80 60 65 90 70 C 120 75 135 55 160 60 C 190 65 210 50 240 55 L 260 58 L 260 120 L 0 120 Z"
                      fill="url(#lineGrad)"
                    />
                    <path
                      d="M0 90 C 40 80 60 65 90 70 C 120 75 135 55 160 60 C 190 65 210 50 240 55 L 260 58"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Highlight dot */}
                  <div className="absolute left-[40%] top-[30%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
                    <div className="rounded-full bg-black/70 px-2 py-1 text-[10px] text-neutral-100 shadow-[0_0_20px_rgba(15,23,42,0.9)]">
                      +3.9%
                    </div>
                    <div className="h-10 w-px bg-sky-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
                  </div>
                </div>  

                <p className="mt-4 text-xs text-neutral-400">
                  Turn raw activity into clear, real-time insights so your team
                  can make faster, smarter decisions.
                </p>
              </div>

              {/* Bottom-right: Schedule + CTA */}
              <div className="relative overflow-hidden rounded-none border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 p-5 md:p-6">
                <div className="mb-4 text-xs font-medium text-neutral-400">
                  Smart Automation
                </div>

                {/* Mini schedule */}
                <div className="space-y-3 rounded-xl bg-neutral-950/70 p-4">
                  <div className="mb-1 flex items-center justify-between text-[10px] text-neutral-500">
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>

                  <div className="space-y-2">
                    <div className="w-40 rounded-full bg-sky-600/90 px-3 py-1 text-[11px] font-medium text-sky-50">
                      Bento grid • 12:00 AM
                    </div>
                    <div className="w-36 rounded-full bg-sky-700/80 px-3 py-1 text-[11px] text-sky-50/90">
                      Landing Page • 3:00 PM
                    </div>
                    <div className="w-32 rounded-full border border-dashed border-sky-500/50 px-3 py-1 text-[11px] text-sky-300/80">
                      + Add Task
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-neutral-400">
                  Let your AI Agent handle the repetitive work so your team can
                  stay focused on strategy and creation.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    className="rounded-full bg-sky-600 px-4 text-xs font-medium hover:bg-sky-500"
                  >
                    Start automating
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-neutral-700 bg-transparent text-xs text-neutral-300 hover:bg-neutral-900"
                  >
                    View workflows
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
