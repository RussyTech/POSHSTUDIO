import { useState } from "react";

const budgets = ["Under $5k", "$5k to $15k", "$15k to $50k", "$50k to $100k", "Over $100k"];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        budget: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

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
        .c-fade-1 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.1s; }
        .c-fade-2 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.25s; }
        .c-fade-3 { animation: fadeUp 0.8s ease forwards; opacity: 0; animation-delay: 0.4s; }
        .orb-pulse { animation: pulse-glow 5s ease-in-out infinite; }

        .contact-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          color: white;
          font-size: 1rem;
          padding: 12px 0;
          outline: none;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.25); }
        .contact-input:focus { border-bottom-color: rgba(255,255,255,0.7); }

        .contact-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          color: white;
          font-size: 1rem;
          padding: 12px 0;
          outline: none;
          resize: none;
          min-height: 100px;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }
        .contact-textarea::placeholder { color: rgba(255,255,255,0.25); }
        .contact-textarea:focus { border-bottom-color: rgba(255,255,255,0.7); }

        .budget-radio { display: none; }
        .budget-label {
          display: inline-block;
          padding: 8px 18px;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.4);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          border-radius: 999px;
          transition: all 0.25s ease;
        }
        .budget-label:hover {
          border-color: rgba(255,255,255,0.5);
          color: rgba(255,255,255,0.8);
        }
        .budget-radio:checked + .budget-label {
          background: white;
          color: black;
          border-color: white;
        }

        @keyframes checkIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .success-card { animation: checkIn 0.5s ease forwards; }
      `}</style>

            <section className="relative min-h-screen bg-black overflow-hidden px-6 md:px-16 pt-32 pb-24">

                {/* Orbs */}
                <div className="orb-pulse absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-900 via-purple-900 to-transparent blur-3xl pointer-events-none" />
                <div className="orb-pulse absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-900 via-blue-900 to-transparent blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />

                <div className="relative z-10 max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="mb-16">
                        <p className="c-fade-1 text-[11px] uppercase tracking-widest text-gray-500 font-medium mb-4">
                            We turn bold ideas into exceptional products
                        </p>
                        <h1
                            className="c-fade-2 font-light text-white leading-tight"
                            style={{ fontSize: "clamp(2.5rem, 5.5vw, 7rem)" }}
                        >
                            Got an idea?<br />
                            <span className="font-semibold">Let's talk.</span>
                        </h1>
                    </div>

                    {/* Form or success */}
                    {submitted ? (
                        <div className="success-card max-w-lg flex flex-col items-start gap-6">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-xl">
                                ✓
                            </div>
                            <h2 className="text-2xl font-light text-white">
                                Thanks for reaching out.
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed">
                                We have received your message and will be in touch shortly. In the meantime feel free to follow our journey on LinkedIn.
                            </p>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-all duration-300 rounded-sm"
                            >
                                Follow us on LinkedIn →
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="c-fade-3 max-w-3xl flex flex-col gap-12">

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        required
                                        className="contact-input"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        className="contact-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                                    Tell us about your project
                                </label>
                                <textarea
                                    placeholder="What are you looking to build?"
                                    required
                                    className="contact-textarea"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {/* Budget */}
                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">
                                    Your budget for this project
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {budgets.map((b) => (
                                        <span key={b}>
                                            <input
                                                type="radio"
                                                id={`budget_${b}`}
                                                name="budget"
                                                value={b}
                                                className="budget-radio"
                                                checked={formData.budget === b}
                                                onChange={() => setFormData({ ...formData, budget: b })}
                                            />
                                            <label htmlFor={`budget_${b}`} className="budget-label">
                                                {b}
                                            </label>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                <button
                                    type="submit"
                                    className="bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-all duration-300 rounded-sm"
                                >
                                    Send Message →
                                </button>
                                <p className="text-gray-600 text-[11px] uppercase tracking-widest leading-relaxed">
                                    By clicking this button you accept{" "}
                                    <a href="/terms" className="text-gray-400 font-semibold underline underline-offset-4 hover:text-white transition-colors">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="/privacy" className="text-gray-400 font-semibold underline underline-offset-4 hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>

                        </form>
                    )}
                </div>
            </section>
        </>
    );
}