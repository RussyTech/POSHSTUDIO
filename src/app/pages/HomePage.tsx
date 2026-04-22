import { useEffect, useRef } from "react";
import AnimatedTagline from "../component/AnimatedTagline";
//import fakeLogo from "./../../assets/logo/Fakelogo.jpg";
import poshLogo from "./../../assets/logo/PoshLogo.png";
import { Link } from "react-router-dom";

export default function HomePage() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const orbs = document.querySelectorAll<HTMLElement>(".parallax-orb");
            orbs.forEach((orb, i) => {
                const speed = (i + 1) * 0.015;
                const x = (e.clientX - window.innerWidth / 2) * speed;
                const y = (e.clientY - window.innerHeight / 2) * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .fade-up-1 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.1s; }
        .fade-up-2 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.25s; }
        .fade-up-3 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.4s; }
        .fade-up-4 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.55s; }
        .float-logo { animation: floatSlow 6s ease-in-out infinite; }
        .orb-pulse { animation: pulse-glow 4s ease-in-out infinite; }
        .glass {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        .glass-dark {
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

            {/* Hero */}
            <div ref={heroRef} className="relative min-h-[calc(100vh-108px)] bg-white overflow-hidden flex items-center">

                {/* Background gradient orbs */}
                <div className="parallax-orb orb-pulse absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-200 via-purple-100 to-transparent blur-3xl pointer-events-none" />
                <div className="parallax-orb orb-pulse absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-sky-200 via-blue-100 to-transparent blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />
                <div className="parallax-orb orb-pulse absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-rose-100 via-pink-50 to-transparent blur-2xl pointer-events-none" style={{ animationDelay: "1s" }} />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">

                    {/* Left — Text content */}
                    <div className="flex flex-col gap-6">
                        <div className="fade-up-1">
                            <span className="glass inline-block px-4 py-2 rounded-full text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                                Software & Systems Development Studio
                            </span>
                        </div>

                        <h1 className="fade-up-2 font-light text-black leading-tight" style={{ fontSize: "clamp(2.2rem, 4.5vw, 5.5rem)" }}>
                            We take brands &{" "}
                            <span className="font-semibold">systems</span>{" "}
                            to the next level
                        </h1>

                        <p className="fade-up-3 text-gray-400 text-base leading-relaxed max-w-md">
                            From complex enterprise platforms to consumer-grade products — we architect, build, and scale digital systems that drive real business outcomes.
                        </p>

                        <div className="fade-up-4 flex items-center gap-4 flex-wrap">
                            <Link
                                to="/contact"
                                className="glass-dark text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-all duration-300 rounded-sm"
                            >
                                Let's Talk →
                            </Link>
                            <Link
                                to="/services"
                                className="glass px-8 py-4 text-xs uppercase tracking-widest font-medium text-gray-600 hover:text-black transition-all duration-300 rounded-sm"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Right — Glass card with logo */}
                    <div className="fade-up-3 flex flex-col gap-6 items-center">
                        <div className="glass rounded-3xl p-10 flex items-center justify-center w-full max-w-sm mx-auto">
                            <img
                                src={poshLogo}
                                alt="PoshLab"
                                className="float-logo w-48 h-auto object-contain -rotate-12 drop-shadow-xl"
                            />
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3 w-full max-w-sm mx-auto">
                            {[
                                { value: "50+", label: "Projects" },
                                { value: "4.9★", label: "Rating" },
                                { value: "100%", label: "Delivery" },
                            ].map((stat) => (
                                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                                    <p className="text-xl font-semibold text-black">{stat.value}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Services glass cards section */}
            <div className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">What we do</p>
                    <h2 className="text-3xl md:text-5xl font-light text-black mb-12 max-w-xl leading-tight">
                        End-to-end <span className="font-semibold">system solutions</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Systems Architecture",
                                desc: "Scalable, resilient infrastructure designed around your business logic and growth trajectory.",
                                icon: "◈",
                                color: "from-violet-100 to-purple-50",
                            },
                            {
                                title: "Product Engineering",
                                desc: "Full-stack application development built with precision — from API design to polished UI.",
                                icon: "⬡",
                                color: "from-sky-100 to-blue-50",
                            },
                            {
                                title: "Digital Strategy",
                                desc: "Turning complex problems into clear technical roadmaps that align with long-term business goals.",
                                icon: "◎",
                                color: "from-rose-100 to-pink-50",
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="glass rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                                <span className="text-xs uppercase tracking-widest text-gray-300 group-hover:text-black transition-colors duration-300 mt-auto">
                                    Learn more →
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatedTagline />
        </>
    );
}