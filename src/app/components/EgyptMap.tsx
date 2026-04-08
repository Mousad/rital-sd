import { useState } from "react";

const branches = [
  { name: "مصر", x: "57%", y: "40%" },
  { name: "السودان", x: "37%", y: "46%" },
  { name: "السعودسة", x: "67%", y: "76%" },

  { name: "الصين", x: "77%", y: "25%" },
  { name: "الهند", x: "84%", y: "93%" },
  { name: "ماليزيا", x: "35%", y: "84%" },
  { name: "تركيا", x: "20%", y: "65%" },
  { name: "رواندا", x: "22%", y: "25%" },
];

export default function EgyptMap() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">

      {/* صورة الخريطة */}
      <img
        src="https://www.eelu.edu.eg/assets/Map-CgIbUkgF.png"
        alt="خريطة"
        className="w-[100%] h-[220px] -right-20 bg-[#f2f9f5]"
      />

      {/* النقاط */}
      {branches.map((branch, index) => (
        <div
          key={index}
          className="absolute cursor-pointer group"
          style={{
            left: branch.x,
            top: branch.y,
            transform: "translate(-50%, -100%)",
          }}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          {/* أيقونة الموقع */}
          <svg
            width="32"
            height="48"
            viewBox="0 0 40 60"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <path
              fill="#154734"
              d="M20 0C9 0 0 9 0 20c0 14 20 40 20 40s20-26 20-40C40 9 31 0 20 0z"
            />

            {/* النقطة البيضاء */}
            <circle cx="20" cy="20" r="6" fill="white" />
          </svg>

          {/* اسم الدولة */}
          {active === index && (
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#154734] text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
              {branch.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}