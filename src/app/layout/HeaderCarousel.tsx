const items = [
  "STRATEGIC EXPERIENCES",
  "BUSINESS VALUE",
  "PURPOSEFUL DESIGN",
  "RESULT DRIVEN SOLUTIONS",
  "BRANDING",
];

const repeated = [...items, ...items, ...items, ...items];

export default function HeaderCarousel() {
  return (
    <div className="overflow-hidden bg-black text-white py-2 border-b border-gray-800">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[11px] uppercase tracking-widest font-medium px-6">
              {item}
            </span>
            <span className="text-gray-500 text-xs">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}