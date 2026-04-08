import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backImage from "@/app/pilden/baks.jfif";
import bsnkImage from "@/app/pilden/bsnk.jpg";
import akibImage from "@/app/pilden/akib.png";

// import buackImage from "/src/app/pilden/buack.jpg";

const heroSlides = [
  {
    image: backImage,
    headline: "ابدأ رحلتك التعليمية بثقة مع ريتال",
    subheadline:
      "منصة ريتال ترشدك خطوة بخطوة لاختيار أفضل المنح الدراسية والجامعات حول العالم، لتضمن مستقبلاً تعليمياً مشرقاً مليئاً بالفرص.",
  },
  {
    image: bsnkImage,
    headline: "انضم لمجتمع ريتال من الطلاب الناجحين",
    subheadline:
      "أكثر من 5000 طالب حققوا أهدافهم التعليمية بمساعدة ريتال، لتكون أنت التالي الذي يحقق أحلامه بثقة وسهولة.",
  },
  {
    image: akibImage,
    headline: "أفضل الجامعات العالمية في متناول يديك",
    subheadline:
      "اكتشف برامج دراسية معتمدة دولياً عبر ريتال، بتكاليف مناسبة ودعم كامل لتجربة تعليمية سلسة وموثوقة.",
  },
];

// ======= SearchCard Component =======
function SearchCard() {
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setDegree(value);

    if (value === "scholarship") navigate("/services/scholarships");
    else if (value === "certificate") navigate("/services/certificateservices");
    else if (value === "courses") navigate("/services/courses");
    else if (value === "consultation") navigate("/services/consultation");
  };

  const handleSearch = () => {
    if (degree === "scholarship") navigate("/scholarships");
    if (degree === "certificate") navigate("/certificateservices");
    if (degree === "consultation") navigate("/consultation");
    
  };

  return (
    <div className="w-full flex justify-center px-9">
      <div className="bg-black/50 backdrop-blur-md rounded-3xl shadow-lg p-6 w-full max-w-md text-white flex flex-col gap-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold">حقق حلمك الآن</h2>
         
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 bg-black/30 rounded-xl px-4 py-2 cursor-pointer hover:bg-black/40">
            <GraduationCap size={20} />
            <select
              className="bg-{#f2f9f5} w-full text-sm py-1 h-10 outline-none text-white"
              value={degree}
              onChange={handleChange}
            >
              <option value="" className="text-[#1c398e]">اختر الخدمة</option>
              <option value="scholarship" className="text-[#1c398e]">اﻟﻤﻨﺢ اﻟﺪوﻟﻴﺔ</option>
              <option value="certificate" className="text-[#1c398e]">استخراج شهادات</option>
              
              <option value="consultation" className="text-[#1c398e]">استشارات</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-20 bg-white text-black rounded-full py-3 px-6 font-semibold hover:scale-105 transition-transform"
        >
          ابحث
        </button>
      </div>
    </div>
  );
}

// ======= HeroSection Component =======
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? "opacity-60" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "800px",
         
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
      />

      {/* Content */}                                                                                               
      <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-4 pt-40 md:pt-48 lg:pt-56">
        {/* النصوص المتغيرة */}
        <div className="mb-12 max-w-2xl transition-all duration-500">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {slide.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {slide.subheadline}
          </p>
        </div>

        {/* SearchCard ثابتة */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}