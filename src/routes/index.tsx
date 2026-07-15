import { createFileRoute } from "@tanstack/react-router";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CUBIX - Remote Drive" },
      {
        name: "description",
        content:
          "CUBIX - Remote Drive gives you emergency backup access to your important Google Drive files — even if you lose or forget your phone.",
      },
      { property: "og:title", content: "CUBIX - Remote Drive" },
      {
        property: "og:description",
        content:
          "Backup access to critical files with just a username and secret code.",
      },
    ],
  }),
});

const avatarUrls = [
  { imageUrl: "https://i.pravatar.cc/80?img=12", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?img=32", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?img=47", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?img=68", profileUrl: "#" },
];

const navFont =
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

function Index() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white text-[#0a0a0a]"
      style={{ fontFamily: navFont }}
    >
      <SiteNav />

      <main className="relative flex-1 overflow-hidden">
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
          {/* Trust badge above brand */}
          <div className="inline-flex items-center gap-3 mb-8 pl-1 pr-4 py-1 bg-[#eff6ff] rounded-full">
            <AvatarCircles
              avatarUrls={avatarUrls}
              numPeople={100}
              className="scale-75 origin-left [&_img]:border-white [&_a:last-child]:bg-[#2563eb] [&_a:last-child]:border-white [&_a:last-child]:text-white [&_a:last-child]:hover:bg-[#1d4ed8]"
            />
            <p className="text-xs font-semibold text-[#0a0a0a] whitespace-nowrap">
              Trusted by <span className="text-[#2563eb]">100k+</span> users
            </p>
          </div>

          <div className="relative">
            {/* Glow pinned to the CUBIX word */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[130%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 50% 45% at 50% 55%, rgba(59,130,246,0.55) 0%, rgba(37,99,235,0.28) 45%, rgba(37,99,235,0.06) 70%, rgba(255,255,255,0) 78%)",
                filter: "blur(22px)",
              }}
            />
            <h1
              className="relative z-10 text-[16vw] font-black leading-none tracking-[-0.05em] text-neutral-900 uppercase"
              style={{ fontFamily: navFont }}
            >
              CUBIX
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-[#3f3f46] leading-relaxed">
            Emergency backup access to your important Google Drive files — even
            when you lose or forget your phone. Just a username and a secret
            code, from anywhere.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
