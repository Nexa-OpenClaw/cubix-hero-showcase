import { createFileRoute } from "@tanstack/react-router";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import VaultLock from "@/components/forgeui/vault-lock";

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

const systemFont =
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

function Index() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white text-[#0a0a0a]"
      style={{ fontFamily: systemFont }}
    >
      <SiteNav />

      <main className="relative flex-1 overflow-hidden">
        {/* Blue circular glow from bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-40%] w-[120vw] h-[120vw] max-w-[1600px] max-h-[1600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.55) 0%, rgba(37,99,235,0.35) 25%, rgba(37,99,235,0.12) 45%, rgba(255,255,255,0) 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.55) 0%, rgba(59,130,246,0.25) 40%, rgba(255,255,255,0) 70%)",
            filter: "blur(30px)",
          }}
        />

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: brand + description + trust */}
          <div className="flex flex-col items-start text-left">
            <h1
              className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-none tracking-[-0.04em] text-[#0a0a0a] uppercase"
              style={{ fontFamily: systemFont }}
            >
              CUBIX
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-[#3f3f46] leading-relaxed">
              Emergency,{" "}
              <span className="underline decoration-[#2563eb] decoration-2 underline-offset-4">
                backup access
              </span>{" "}
              to your important{" "}
              <span className="underline decoration-[#2563eb] decoration-2 underline-offset-4">
                Google Drive files
              </span>{" "}
              — even when you lose or forget your phone. Just a username and a{" "}
              <span className="underline decoration-[#2563eb] decoration-2 underline-offset-4">
                secret code
              </span>
              , from anywhere.
            </p>

            <div className="inline-flex items-center gap-3 mt-8 pl-1 pr-4 py-1 bg-[#eff6ff] rounded-full">
              <AvatarCircles
                avatarUrls={avatarUrls}
                numPeople={100}
                className="scale-75 origin-left [&_img]:border-white [&_a:last-child]:bg-[#2563eb] [&_a:last-child]:border-white [&_a:last-child]:text-white [&_a:last-child]:hover:bg-[#1d4ed8]"
              />
              <p className="text-xs font-semibold text-[#0a0a0a] whitespace-nowrap">
                Trusted by <span className="text-[#2563eb]">100k+</span> users
              </p>
            </div>
          </div>

          {/* Right: VaultLock */}
          <div className="flex justify-center lg:justify-end">
            <VaultLock
              cardTitle="Secure Remote Access"
              cardDescription="Unlock your Drive from anywhere with just a username and secret code."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
