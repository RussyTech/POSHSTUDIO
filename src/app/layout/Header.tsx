import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderCarousel from "./HeaderCarousel";
import poshLogo from "../../assets/logo/PoshLogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Let's Talk", to: "/contact" },
];

const serviceCategories = [
  {
    label: "Design",
    items: ["UI/UX Design", "Mobile App Design", "Web App Design", "Branding & Identity"],
  },
  {
    label: "Development",
    items: ["Web Development", "Mobile App Development", "API & Backend", "Cloud Infrastructure"],
  },
  {
    label: "Research",
    items: ["UX Audit", "Product Discovery", "Technical Workshop"],
  },
  {
    label: "Validate",
    items: ["Proof of Concept", "Rapid Prototyping", "User Testing"],
  },
  {
    label: "Build",
    items: ["MVP Development", "System Architecture", "Scalable Platforms"],
  },
  {
    label: "Scale",
    items: ["Performance Optimisation", "DevOps & CI/CD", "Team Extension"],
  },
];

function MobileCategoryDropdown({
  cat,
  onClose,
}: {
  cat: { label: string; items: string[] };
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between py-2 text-xs uppercase tracking-widest font-medium text-left text-black"
      >
        {cat.label}
        <span
          className="text-base transition-transform duration-300"
          style={{ display: "inline-block", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ›
        </span>
      </button>

      {open && (
        <div className="flex flex-col gap-2 pl-4 pb-2 border-l border-gray-100">
          {cat.items.map((item) => (
            <Link
              key={item}
              to="/services"
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-black transition-colors py-1"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  return (
    <>
      <style>{`
        .mega-menu {
          animation: menuFadeIn 0.2s ease forwards;
        }
        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .service-item-link {
          position: relative;
          display: inline-block;
          transition: color 0.25s ease;
          color: #111;
        }
        .service-item-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #111;
          transition: width 0.3s ease;
        }
        .service-item-link:hover::after { width: 100%; }
        .category-row {
          transition: color 0.2s ease;
        }
        .category-row.active { color: #000; font-weight: 600; }
        .category-row:not(.active) { color: #9ca3af; }
        .category-row:hover { color: #000; }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-8 h-[72px] bg-white border-b border-gray-200">

          {/* Left */}
          <div className="flex items-center gap-8">
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-medium transition-colors ${isActive ? "text-black" : "text-gray-400 hover:text-black"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Services trigger — desktop only */}
              <button
                className={`text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-1 ${servicesOpen ? "text-black" : "text-gray-400 hover:text-black"}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span className={`transition-transform duration-300 text-[10px] ${servicesOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
            </nav>
          </div>

          {/* Right: logo */}
          <img src={poshLogo} alt="Posh Logo" className="h-36 w-auto object-contain" />
        </div>

        {/* Desktop mega menu — unchanged */}
        {servicesOpen && (
          <div
            className="mega-menu hidden md:flex bg-white border-b border-gray-200 shadow-lg"
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="w-72 border-r border-gray-100 py-6 flex flex-col">
              <div className="grid grid-cols-1">
                <div className="flex flex-col">
                  {serviceCategories.slice(0, 3).map((cat) => (
                    <button
                      key={cat.label}
                      onMouseEnter={() => setActiveCategory(cat)}
                      className={`category-row flex items-center justify-between px-8 py-3 text-xs uppercase tracking-widest text-left ${activeCategory.label === cat.label ? "active" : ""}`}
                    >
                      {cat.label}
                      <span className={`text-xs transition-transform duration-200 ${activeCategory.label === cat.label ? "translate-x-1" : ""}`}>›</span>
                    </button>
                  ))}
                </div>
                <div className="mx-8 my-3 h-px bg-gray-100" />
                <div className="flex flex-col">
                  {serviceCategories.slice(3).map((cat) => (
                    <button
                      key={cat.label}
                      onMouseEnter={() => setActiveCategory(cat)}
                      className={`category-row flex items-center justify-between px-8 py-3 text-xs uppercase tracking-widest text-left ${activeCategory.label === cat.label ? "active" : ""}`}
                    >
                      {cat.label}
                      <span className={`text-xs transition-transform duration-200 ${activeCategory.label === cat.label ? "translate-x-1" : ""}`}>›</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 py-8 px-12 flex flex-col gap-3 justify-center">
              {activeCategory.items.map((item) => (
                <Link
                  key={item}
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="service-item-link text-2xl font-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile full-screen menu with accordion services */}
        {menuOpen && (
          <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-[36px] z-40 bg-white overflow-y-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest font-medium transition-colors ${isActive ? "text-black" : "text-gray-400 hover:text-black"}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="h-px bg-gray-100" />

            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Services</p>

            {serviceCategories.map((cat) => (
              <MobileCategoryDropdown
                key={cat.label}
                cat={cat}
                onClose={() => setMenuOpen(false)}
              />
            ))}
          </div>
        )}

        {/* Carousel — fixed to bottom on mobile when menu is open */}
        <div className={`md:relative ${menuOpen ? "fixed bottom-0 left-0 right-0 z-50" : ""}`}>
          <HeaderCarousel />
        </div>
      </header>
    </>
  );
}