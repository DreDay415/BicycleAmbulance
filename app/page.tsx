import fs from "fs";
import path from "path";

import HeadphoneScroll from "./components/HeadphoneScroll";

const getFrameUrls = () => {
  const sequenceDir = path.join(process.cwd(), "public", "sequence");
  if (!fs.existsSync(sequenceDir)) {
    return [];
  }

  return fs
    .readdirSync(sequenceDir)
    .filter((file) => file.endsWith(".webp"))
    .sort()
    .map((file) => `/sequence/${file}`);
};

const services = [
  "Tune Up",
  "Install Tire",
  "Install Tube",
  "Install Cable",
  "Adjust Hand Brake",
  "True Wheel",
  "Adjust Derail",
  "Adjust Hub",
];

export default function Page() {
  const frames = getFrameUrls();

  return (
    <main className="relative min-h-screen bg-[#050505] text-white/90">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-48 bg-gradient-to-b from-[#0A0A0A] to-[#050505]" />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-xs font-medium uppercase tracking-[0.4em] text-white/70">
            The Bicycle Ambulance
          </div>
          <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70 transition hover:border-white/40 hover:bg-white/10 hover:text-white/90">
            Book Service
          </button>
        </div>
      </header>

      <div className="-mt-px">
        <HeadphoneScroll frames={frames} />
      </div>

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-20 text-center md:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-white/90 md:text-5xl">
          Welcome
        </h2>
        <p className="max-w-xl text-sm text-white/60 md:text-base">
          Dispatch a mobile mechanic or stop by the shop. We’re here to keep you
          rolling.
        </p>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Santa Monica, CA
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white/90 md:text-6xl">
          The only bike shop that comes to you—precision repairs, lightning-fast
          response, and a legendary ride.
        </h1>
        <p className="max-w-2xl text-base text-white/60 md:text-lg">
          We keep Santa Monica rolling with mobile service, meticulous
          craftsmanship, and a team that treats every bike like their own.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white/90 md:text-4xl">
            From tune-ups to full rebuilds, we keep you in motion.
          </h2>
          <p className="mt-4 text-white/60">
            Visit the shop or call for a dispatch. We handle repairs on the
            street, at home, or at the office—wherever your bike needs rescue.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_-60px_rgba(255,255,255,0.35)]">
          <div className="grid gap-3 text-sm text-white/70 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#050505]/60 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-white/40">
        Call to dispatch. Open daily. Santa Monica, California.
      </footer>
    </main>
  );
}
