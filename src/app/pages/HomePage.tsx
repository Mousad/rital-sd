import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import { ProgramsSection } from "../components/ProgramsSection";
import { ConsultationCTA } from "../components/ConsultationCTA";

import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { CertificateServices } from "../components/CertificateServices";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";
import UniversitiesSlider from "../components/niversitiesSlider";
import ritalImage from "../pilden/rital.png"
import ChatBot from "../components/ChatBot";
import WhyTrueUniv from "../components/WhyTrueUniv";


import oom from "../pilden/oom.png";
import akib from "../pilden/akib.png";

    



const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
  ];
// خدمات
const services = [
  { title: "التقديم على المنح الدراسية", slug: "scholarships" },
  { title: "استخراج تجهيز الشهادات", slug: "CertificateServices" },
  { title: "الاستشارات التعليمية", slug: "Consultation" },
  

];

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <HeroSection />
      <StatsSection />

       <section className="py-6 flex justify-center bg-[#f2f9f5]">
  <div className="relative w-[330px] h-[220px] rounded-3xl overflow-hidden shadow-xl">

    {/* الصورة */}
    <img
      src="https://i.pinimg.com/736x/58/cb/bb/58cbbb978738541186bd85e374ece2fb.jpg"
      alt="الدراسة في الصين"
      className="w-full h-full object-cover"
    />

    {/* طبقة تغميق */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* النص في وسط الصورة */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

      <h2 className="text-3xl font-bold text-white mb-3">
        الدراسة في الصين
      </h2>

      <p className="text-sm text-gray-200 mb-6">
        منصة ريتال تساعدك على اختيار أفضل الجامعات والمنح الدراسية في الصين
        لتضمن مستقبلاً تعليمياً مشرقاً.
      </p>

      {/* الزر */}
      <Link
        to="/study-china"
        className="bg-[#154734] hover:bg-[#0f3a2a] text-white px-6 py-2 rounded-full transition"
      >
        قدم
      </Link>

    </div>

  </div>
       </section>

      <section className="py-13 flex justify-center bg-[#f2f9f5]">
  <div className="relative bg-[#f2f9f5] rounded-3xl shadow-xl w-[330px] max-w-sm p-4 md:p-6 flex flex-col items-center text-right">

    {/* البوردر */}
    <div className="absolute top-0 left-0 w-full h-full border-2 border-[#2f3b69] rounded-3xl pointer-events-none"></div>

    {/* الصورة */}
    <div className="relative -mt-18 z-20">
     <img
  src={oom}
  alt="student"
  className="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover border-2 border-[#2f3b69] shadow-lg"
/>

    </div>

    {/* العنوان */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-4">
      خدمات ريتال
    </h2>

    {/* الخدمات */}
    <div className="grid md:grid-cols-2 gap-2 w-full">
      {services.map((service, idx) => (
        <Link
          key={idx}
          to={`/services/${service.slug}`}
          className="relative group overflow-hidden bg-[#f2f9f5] p-3 rounded-xl shadow transition text-[#0d2b5e] font-medium text-center"
        >

          {/* الخلفية المتحركة */}
          <span className="absolute inset-0 bg-[#154734] scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

          {/* النص */}
          <span className="relative z-10 group-hover:text-white transition">
            {service.title}
          </span>

        </Link>
      ))}
    </div>

    {/* زر المزيد */}
    <div className="mt-6 z-10">
  <Link
    to="/about"
    className="relative group overflow-hidden px-8 z-100 bg-[#154734] text-white  -bottom-7  rounded-full border border-[#154734] text-[#154734] font-"
  >
    
    {/* الخلفية المتحركة من تحت */}
    <span className="absolute inset-0 bg-[#154734]  origin-bottom rounded-full  transition-transform duration-500 "></span>

    {/* النص */}
    <span className="relative z-100">
      المزيد
    </span>

  </Link>
</div>

  </div>
       </section>

       

      

      <section className="py-10 flex justify-center bg-[#f2f9f5]">
  <div className="relative bg-[#f2f9f5] rounded-3xl shadow-xl w-[330px] max-w-sm p-4 md:p-6 flex flex-col md:flex-col items-center text-right">

    {/* البوردر */}
    <div className="absolute top-0 left-0 w-full h-full border-2 border-[#2f3b69] rounded-3xl pointer-events-none"></div>

    {/* الصورة + النص في صف واحد على الموبايل */}
    <div className="flex flex-row items-center gap-4 mb-1 md:flex-col md:items-center">
      {/* الصورة */}
      <img
        src={akib} // استبدل بالصورة عندك 
        alt="الدراسة في مصر"
        className="w-30 h-52 md:w-40 md:h-45 rounded-full object-cover border-4 border-white shadow-lg"
      />

      {/* النص */}
      <div className="flex-1 text-right">
        <h2 className="text-lg md:text-2xl font-bold text-[#0d2b5e]">
          الدراسة في مصر
        </h2>
        <p className="text-sm md:text-base text-gray-700 mt-1 ">
          منصة ريتال تساعدك على اختيار أفضل الجامعات والمنح الدراسية في مصر، لتضمن مستقبلاً تعليمياً مشرقاً.
        </p>
        <div className="-mt-1 py-3 md:mt-1  z-10 ">
      <Link
        to="/study-egypt"
        className="relative group top-6 z-10 bg-[#154734] overflow-hidden px-8  rounded-full   text-[#f2f9f5] font-medium"
      >
        <span className="absolute inset-0  z-10  origin-bottom rounded-full  transition-transform "></span>
        <span className="relative z-10 group-hover:text-white right-14 transition">
          اكتشف
        </span>
      </Link>
    </div>
      </div>
    </div>
  </div>
      </section>
      <UniversitiesSlider />
      
       <section className="py-10 bg-[#f2f9f5]">
  <div className="container mx-auto px-4">

    {/* التعريف */}
    <div className="flex flex-col items-center text-center mb-10">

      <img
        src={ritalImage}
        alt="ريتال التعليمية"
        className="w-12 h-auto mb-4 rounded-xl"
      />

      <h2 className="text-3xl font-bold text-[#0d2b5e] mb-4">
        تعرف على ريتال التعليمية 
      </h2>

      <p className="text-gray-600 max-w-xl">
        اضغط على الزر التالي لزيارة صفحة "عن ريتال التعليمية" ومعرفة كل التفاصيل.
      </p>

    </div>


    {/* الكروت */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">

      {majors.map((major, index) => (
        <a
          key={index}
          href={major.link || "#"}
          className="relative group overflow-hidden bg-white border rounded-xl p-6 flex flex-col items-center text-center shadow-sm"
        >

          {/* الخلفية المتحركة من اليمين */}
          <span className="absolute inset-0 bg-[#154734] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

          <img
            src={major.img}
            alt={major.title}
            className="relative z-10 w-10 h-10 object-contain mb-4"
          />

          <h3 className="relative z-10 font-bold text-lg mb-1 group-hover:text-white transition">
            {major.title}
          </h3>

        </a>
      ))}

    </div>


    {/* الزر تحت */}
   

  </div>
       </section>
      <WhyTrueUniv />
      
      <ChatBot />
      {/* <AboutSection /> */}
   
      <ConsultationCTA />
      {/* <TeamSection /> */}
      <TestimonialsSection />
    
      <ContactSection />
     {/* ======= سكشن موقعنا ======= */}

     {/* <BlogSection />  */}
     

    </div>
  );
}