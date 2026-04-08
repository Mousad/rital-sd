// src/app/pages/CoursesPage.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function CoursesPage() {

  const courses = [
    {
      id: 1,
      title: "كورسات تعليمية معتمدة",
      description: [
        "دورات تعليمية معتمدة محلياً وعالمياً",
        "مواد تعليمية تفاعلية",
        "شهادات معترف بها",
      ],
    },
    {
      id: 2,
      title: "دورات تطوير المهارات",
      description: [
        "تنمية المهارات الشخصية والمهنية",
        "إدارة الوقت والتواصل الفعال",
        "مهارات القيادة والعمل الجماعي",
      ],
    },
    {
      id: 3,
      title: "برامج تحضيرية للدراسة بالخارج",
      description: [
        "تحضير اللغة الإنجليزية",
        "تحضير للقبول الجامعي",
        "ارشادات وإرشادات السفر والإقامة",
      ],
    },
  ];

  const images = [
    "https://i.pinimg.com/736x/58/05/98/580598a49346ea48354bdba4654e3b7a.jpg",
    "https://www.coursat.org/images/intro-bg.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  // النصوص المتحركة
  const announcements = [
    "ورش تحضيرية مجانية للمتقدمين للمنح الدراسية",
    "فتح باب التسجيل للكورسات المعتمدة",
    "خصومات خاصة على كورسات اللغة الإنجليزية",
    "فرصة ذهبية للتسجيل في برامج الدراسة بالخارج",
    "ابدأ رحلتك التعليمية مع منصة ريتال اليوم",
  ];

  const [activeAnnouncement, setActiveAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const videos = [
    { id: 1, title: "تعلم صينية", url: "https://youtu.be/sHYzLpwdUJI?si=biyHcXMn02c4APv4" },
    { id: 2, title: "كورسي انجليزي", url: "https://www.youtube.com/watch?v=77IK9T45kiU&list=PLp22-4PivYmIFAnru_L7fnMhSV5YffLTZ" },
    { id: 3, title: "تعلم لغة روسية", url: "https://youtu.be/AwQqgBymc2U?si=rhwlD_IowXdxH3e9" },
    { id: 4, title: "لغة تركية", url: "https://youtu.be/v555PlHbXJ4?si=ZGpuNlvfe6-0PVWp" },
  ];

  function getYouTubeID(url: string) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  // التصنيفات
  const categories = [
    { title: "التصميم",  img: "https://courssat.com/images/design.svg" },
    { title: "العلوم والتكنولوجيا", img: "	https://courssat.com/images/science.svg" },
    { title: "التسويق", img: "	https://courssat.com/images/marketing.svg" },

    { title: "اللغات", img: "https://courssat.com/images/language.svg" },
  ];

  return (
    <div className="min-h-screen relative">

      {/* الخلفية */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl lg:text-[40px] font-bold mb-3 lg:mb-8 bg-[url(/images/hero-section-content-bg-light.svg)] dark:bg-[url(/images/hero-section-content-bg-dark.svg)] bg-no-repeat bg-bottom inline-block">
            نوفر لك أكثر من{" "}
            <span className="text-secondary align-sub text-3xl lg:text-5xl">+500</span>
            <br />
            كورس لمختلف المجالات مدى الحياة
          </h1>

          <div className="flex flex sm:flex-row justify-center gap-5 lg:gap-16 text-white">
            <div className="text-center">
              <h3 className="text-body-5 font-bold mb-3 text-2xl lg:text-5xl text-[#154734]">+200K</h3>
              <p className="text-sm lg:text-base text-body-2 text-[]">طلابنا المسجلين</p>
            </div>
            <div className="text-center">
              <h3 className="text-body-5 font-bold mb-3 text-2xl lg:text-5xl text-[#154734]">+100</h3>
              <p className="text-sm lg:text-base text-body-2">مدربينا</p>
            </div>
            <div className="text-center">
              <h3 className="text-body-5 font-bold mb-3 text-2xl lg:text-5xl text-[#154734]">+500</h3>
              <p className="text-sm lg:text-base text-body-2">الكورسات</p>
            </div>
          </div>
        </div>
      </div>

      {/* المنحة / النصوص المتغيرة */}
      <div className="relative bg-gradient-to-br from-[#feeaeb]/30 to-[#e9e8ee]/30 backdrop-blur-sm border-y border-primary/10 py-12 overflow-hidden transition-all duration-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="bg-primary/70 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                جديد
              </div>
              <div className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-primary/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                </svg>
              </div>
              <span className="text-lg md:text-xl font-bold text-primary/90 max-w-4xl text-center leading-relaxed transition-all duration-500">
                {announcements[activeAnnouncement]}
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveAnnouncement(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  activeAnnouncement === index
                    ? "w-8 bg-primary shadow-lg"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* النص التسويقي */}
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              هل تبحث عن فرصة حقيقية لتطوير مهاراتك وفتح أبواب جديدة لمستقبلك؟  
              منصة <span className="font-bold text-[#154734]">ريتال التعليمية</span> تقدم لك مجموعة مميزة من الكورسات
              والدورات التدريبية المصممة خصيصاً لمساعدتك على اكتساب مهارات
              عملية ولغات جديدة تؤهلك للدراسة والعمل في بيئة دولية.
              من خلال محتوى تعليمي حديث وإرشاد أكاديمي متخصص، ستتمكن من
              التعلم بخطوات واضحة تساعدك على تحقيق أهدافك التعليمية
              والمهنية بثقة.
              لا تضيع الفرصة وابدأ رحلتك التعليمية اليوم مع ريتال 🚀
            </p>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end py-5">
            <img
              src="https://unitededucation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSec1cer.6affd1d8.png&w=640&q=75"
              alt="certificate"
              className="w-72"
            />
          </div>
        </div>
      </div>

      {/* الفيديوهات */}
       <section className="mb-12 lg:mb-14 container mx-auto px-4">
        <div className="flex flex-col items-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-[45px] text-body-5 font-bold">التصنيفات</h2>
          <img src="	https://courssat.com/images/check.svg" className="w-20.5 lg:w-auto" alt="Check" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="h-12.5 lg:h-auto flex cursor-pointer items-center gap-3 lg:gap-4 border px-3 py-3 lg:px-[30px] lg:py-7 border-dashed border-custom-2 rounded-sm hover:shadow-md transition"
            >
              <img src={cat.img} className="w-6.5 lg:w-auto" alt={cat.title} />
              <h3 className="text-sm lg:text-xl text-body-5 font-bold">{cat.title}</h3>
            </a>
          ))}
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#154734] text-center mb-8">الكورسات</h2>
        <div className="grid grid-cols-2 gap-6">
          {videos.map((video) => {
            const videoID = getYouTubeID(video.url);
            const thumb = videoID
              ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`
              : "";

            return (
              <div key={video.id} className="bg-[#f2f9f5] p-2 rounded-xl shadow-md">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="relative block">
                  <img src={thumb} alt={video.title} className="w-full h-48 rounded-lg object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                      <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-2xl" />
                    </div>
                  </div>
                </a>
                <h3 className="text-[#154734] text-center mt-3">{video.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* قسم التصنيفات */}
     

      {/* زر واتساب */}
      <a
        href="https://wa.me/201000000000"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

    </div>
  );
}