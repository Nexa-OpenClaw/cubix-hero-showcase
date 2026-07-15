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

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0a0a0a]">
      <SiteNav />

      <main className="relative flex-1 flex items-center justify-center overflow-hidden">
        <section className="relative z-10 flex flex-col items-center text-center px-6 py-32">
          <div className="inline-flex items-center gap-3 mb-8 pl-1 pr-3 py-1 bg-[#f4f4f5] border-2 border-black rounded-full">
            <AvatarCircles
              avatarUrls={avatarUrls}
              numPeople={100}
              className="scale-75 origin-left [&_img]:border-white [&_a:last-child]:bg-[#cd1c18] [&_a:last-child]:border-white [&_a:last-child]:text-white [&_a:last-child]:hover:bg-[#b3160f]"
            />
            <p className="text-xs font-semibold text-[#0a0a0a] whitespace-nowrap">
              Trusted by <span className="text-[#cd1c18]">100k+</span> users
            </p>
          </div>

          <h1
            className="text-[clamp(4rem,14vw,12rem)] font-bold leading-none tracking-[-0.04em] text-[#0a0a0a] uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CUBIX
          </h1>

          <p className="mt-2 text-lg md:text-xl font-semibold text-[#0a0a0a] tracking-wide uppercase">
            Remote Drive
          </p>

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
