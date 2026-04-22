import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "50+", label: "Systems delivered" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "3x", label: "Avg. performance improvement" },
  { value: "92%", label: "Clients return for more" },
];

const values = [
  {
    number: "01",
    title: "Systems thinking first",
    desc: "We don't just build features. We architect solutions. Every decision is made with the full system in mind, from data flow to user experience.",
  },
  {
    number: "02",
    title: "Posh by design",
    desc: "We believe software should feel as good as it performs. Every interface we ship is crafted with obsessive attention to detail because your users notice everything.",
  },
  {
    number: "03",
    title: "Long-term partnership",
    desc: "Our best work comes from deep relationships. We embed ourselves in your problem and stay genuinely invested in your outcome long after launch.",
  },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .about-fade-1 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.1s; }
        .about-fade-2 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.25s; }
        .about-fade-3 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.4s; }
        .about-fade-4 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.55s; }
        .orb-pulse { animation: pulse-glow 5s ease-in-out infinite; }
        .glass-light {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .glass-white {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .value-row {
          border-top: 1px solid rgba(0,0,0,0.08);
          transition: background 0.3s ease;
        }
        .value-row:hover {
          background: rgba(0,0,0,0.02);
        }
        .underline-link {
          position: relative;
          display: inline-block;
        }
        .underline-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #fff;
          transition: width 0.3s ease;
        }
        .underline-link:hover::after { width: 100%; }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between px-6 md:px-16 pt-32 pb-16">

        <div className="orb-pulse absolute top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-900 via-purple-900 to-transparent blur-3xl pointer-events-none" />
        <div className="orb-pulse absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-900 via-blue-900 to-transparent blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-8 flex-1 justify-center">

          <div className="about-fade-1">
            <span className="glass-light inline-block px-4 py-2 rounded-full text-[11px] uppercase tracking-widest text-gray-400 font-medium">
              Software & Systems Development Studio
            </span>
          </div>

          <h1
            className="about-fade-2 font-light text-white leading-tight max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 7rem)" }}
          >
            We engineer systems that feel{" "}
            <span className="font-semibold">posh.</span>
          </h1>

          <p className="about-fade-3 text-gray-400 text-base leading-relaxed max-w-lg">
            PoshLab exists at the intersection of powerful engineering and refined design. We build systems that don't just work. They feel exceptional to use.
          </p>

          <div className="about-fade-4 flex items-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-all duration-300 rounded-sm"
            >
              Let's Talk →
            </Link>
            <Link
              to="/services"
              className="glass-light text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-all duration-300 rounded-sm underline-link"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-light px-8 py-6 flex flex-col gap-2">
                <p className="text-3xl md:text-4xl font-light text-white">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-violet-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">Our Foundation</span>
            <h2
              className="mt-6 font-light text-black leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}
            >
              Built on precision,<br />
              <span className="font-semibold">driven by outcomes</span>
            </h2>
          </div>

          <div ref={missionRef} className="flex flex-col gap-8 pt-2">
            <p className="text-gray-500 text-lg leading-relaxed">
              The name says it all. Posh is not just an aesthetic. It is a standard. We believe every touchpoint a user has with your product should feel considered, polished and premium.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              We work with founders, product teams and enterprises who want more than a dev shop. They want a technical partner who genuinely understands the business behind the build and cares deeply about both.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              From the logic behind your data flows to the micro-animation on a button hover, every detail is intentional. That is the PoshLab difference.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">How we work</span>
          <h2
            className="mt-6 mb-12 font-light text-black leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}
          >
            What sets us apart
          </h2>

          <div className="flex flex-col">
            {values.map((v) => (
              <div
                key={v.number}
                className="value-row py-8 flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center px-2"
              >
                <span className="text-xs text-gray-300 font-mono w-8 shrink-0">{v.number}</span>
                <h3 className="text-lg font-semibold text-black md:w-64 shrink-0">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
            <div className="border-t border-black/08" />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative bg-black px-6 md:px-16 py-24 overflow-hidden">
        <div className="orb-pulse absolute top-[-30%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-900 to-transparent blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2
            className="font-light text-white leading-tight max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}
          >
            Your users deserve a{" "}
            <span className="font-semibold">posh experience.</span>
          </h2>
          <Link
            to="/contact"
            className="shrink-0 bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-all duration-300 rounded-sm"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </>
  );
}