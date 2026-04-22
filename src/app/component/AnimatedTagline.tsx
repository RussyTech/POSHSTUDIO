import { useEffect, useState } from "react";
import homepageVid from "../../assets/gallary/homepagevid.mov";

const industries = ["FinTech", "SaaS", "Ecommerce", "Ticketing"];

export default function AnimatedTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % industries.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .tagline-glass {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        @keyframes taglineFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tagline-enter {
          animation: taglineFadeUp 0.4s ease forwards;
        }
        .screen-mockup {
          perspective: 1200px;
        }
        .screen-inner {
          transform: rotateY(-8deg) rotateX(4deg);
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }
        .screen-inner:hover {
          transform: rotateY(-2deg) rotateX(1deg);
        }
      `}</style>

      <section className="relative bg-white overflow-hidden py-24 px-6 md:px-16">

        {/* Background orbs */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-100 via-purple-50 to-transparent blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-sky-100 via-blue-50 to-transparent blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="mb-8">
              <span className="tagline-glass inline-block px-4 py-2 rounded-full text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                Industries we serve
              </span>
            </div>

            <h2
              className="font-light leading-tight text-black"
              style={{ fontSize: "clamp(2.2rem, 5vw, 6rem)" }}
            >
              We build products for
              <br />
              <span
                key={index}
                className="tagline-enter font-semibold text-black"
                style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
              >
                {industries[index]}
              </span>
            </h2>

            <div className="flex flex-wrap gap-3 mt-10">
              {industries.map((name, i) => (
                <span
                  key={name}
                  className={`tagline-glass px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                    i === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right — screen mockup */}
          <div className="screen-mockup flex flex-col items-center">
            <div className="screen-inner w-full">

              {/* Monitor outer frame */}
              <div
                className="rounded-2xl p-3 w-full"
                style={{
                  background: "linear-gradient(145deg, #2a2a2a, #111)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* Camera dot */}
                <div className="flex justify-center mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                </div>

                {/* Video content */}
                <div className="rounded-xl overflow-hidden">
                  <video
                    src={homepageVid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full object-cover object-top"
                    style={{ maxHeight: "380px" }}
                  />
                </div>

                {/* Stand notch */}
                <div className="flex justify-center mt-3">
                  <div className="w-16 h-1 rounded-full bg-gray-700" />
                </div>
              </div>

              {/* Stand neck */}
              <div className="flex justify-center mt-1">
                <div
                  className="h-4 rounded-b-xl"
                  style={{
                    width: "40%",
                    background: "linear-gradient(to bottom, #1a1a1a, #0d0d0d)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                />
              </div>

              {/* Stand base */}
              <div className="flex justify-center">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: "55%",
                    background: "#0d0d0d",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            </div>

            {/* Project label */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Moplaces</span>
              <span className="tagline-glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-gray-500">
                Web Platform
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}