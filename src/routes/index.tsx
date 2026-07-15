import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const SideRays = lazy(() => import("@/components/SideRays"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cubix — Emergency access to your Google Drive files" },
      {
        name: "description",
        content:
          "Cubix gives you emergency backup access to your important Google Drive files — even if you lose or forget your phone.",
      },
      { property: "og:title", content: "Cubix — Emergency Drive access" },
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

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0a0a0a]">
      <SiteNav />

      <main className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Light rays background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <SideRays
              rayColor1="#eab308"
              rayColor2="#96c8ff"
              origin="bottom-right"
              speed={2.5}
              intensity={2}
              spread={2}
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={1}
            />
          </Suspense>
        </div>

        <section className="relative z-10 flex flex-col items-center text-center px-6 py-32">
          <AvatarCircles
            avatarUrls={avatarUrls}
            numPeople={100}
            className="mb-6 [&_img]:border-white [&_a:last-child]:bg-[#cd1c18] [&_a:last-child]:border-white [&_a:last-child]:text-white [&_a:last-child]:hover:bg-[#b3160f]"
          />
          <p className="mb-4 text-sm font-medium text-[#6b6b70]">
            Trusted by <span className="text-[#0a0a0a] font-semibold">100k+</span> users worldwide
          </p>

          <h1 className="text-[clamp(4rem,14vw,12rem)] font-extrabold leading-none tracking-[-0.04em] bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/40 bg-clip-text text-transparent">
            Cubix
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-[#6b6b70] leading-relaxed">
            Emergency, backup access to your important Google Drive files —
            even when you lose or forget your phone. Just a username and a
            secret code, from anywhere.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
