import { useState, useEffect } from "react";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
const simpleTestimonials = [
  {
    name: "أحمد عثمان",
    image: "...",
    text: "منصة رتال غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج...",
  },
  {
    name: "نور الحسن",
    image: "...",
    text: "ما يميز منصة رتال هو الاهتمام الشخصي بكل طالب...",
  },
];

export function SimpleTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 px-4 bg-[#f2f9f5] text-center">
      <div className="max-w-xl mx-auto">
        <img
          src={t.image}
          alt={t.name}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl object-cover mb-6 border-4 border-white shadow-lg"
        />
        <p className="text-lg text-gray-700 italic mb-4">"{t.text}"</p>
        <p className="text-xl font-bold text-gray-900">{t.name}</p>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "أحمد عثمان",
    country: "السودان ",
    university: "جامعة إسطنبول",
    major: "هندسة الحاسوب",
    rating: 5,
    image: "https://i.pinimg.com/736x/f1/2f/37/f12f37a580349c171e0cb7ff6f3e8331.jpg",
    text: "منصة رتال غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج لكنني لم أكن أعرف من أين أبدأ. الفريق كان معي في كل خطو .",
    year: "2023",
  },
  {
    name: "نور الحسن",
    country: "🇯🇴 الأردن",
    university: "جامعة بيلكنت",
    major: "إدارة الأعمال الدولية",
    rating: 5,
    image: "https://i.pinimg.com/736x/9e/ed/64/9eed648cc2033c489d13f98fc11487cc.jpg",
    text: "ما يميز منصة رتال هو الاهتمام الشخصي بكل طالب. لم أشعر يوماً أنني مجرد رقم بينهم. ساعدوني في الحصول على قبول في جامعة بيلكنت  !",
    year: "2024",
  },
  {
    name: "عمر بن يوسف",
    country: "🇲🇦 المغرب",
    university: "جامعة أنقرة",
    major: "الطب البشري",
    rating: 5,
    image: "https://i.pinimg.com/736x/c4/28/02/c42802842e179d3b3b981ac44e4ded68.jpg",
    text: "كان حلمي الدراسة في كلية الطب التركية وقد حققته بفضل فريق رتال. ساعدوني في فهم متطلبات القبول وترجمة وثائقي وقدموا لي دعماً نفسياً ومعنوياً خلال فترة .",
    year: "2023",
  },
  {
    name: "فاطمة الزهراوي",
    country: "🇩🇿 الجزائر",
    university: "جامعة حاجتبه",
    major: "الهندسة الطبية الحيوية",
    rating: 5,
    image: "https://i.pinimg.com/736x/05/6c/85/056c85d23f30445c4ad7889967e6d9a1.jpg",
    text: "خدمة احترافية بكل معنى الكلمة. المستشارة سارة التي تولّت ملفي كانت متاحة في أي وقت وأجابت على كل استفساراتي !",
    year: "2024",
  },
  {
    name: "يوسف القاسمي",
    country: "🇪🇬 مصر",
    university: "جامعة بوغازيتشي",
    major: "الذكاء الاصطناعي",
    rating: 5,
    image: "https://i.pinimg.com/736x/71/50/a2/7150a2361dcd4d85734b54b4049d6598.jpg",
    text: "جامعة بوغازيتشي كانت حلماً يبدو بعيد المنال، لكن منصة رتال جعلته حقيقة. ساعدوني في تجهيز ملف استثنائي وأجروا معي تدريبات على المقابلة. اليوم .",
    year: "2024",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnim, setIsAnim] = useState(false);

  const go = (dir: number) => {
    if (isAnim) return;
    setIsAnim(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
      setIsAnim(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-9 px-4 bg-[#f2f9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#154734" }}
          >
            آراء طلابنا
          </span>
          <h2 className="text-4xl font-black text-[#0d2b5e] mb-4">شهادات الطلاب</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            اقرأ ما يقوله طلابنا عن تجربتهم مع منصة رتال التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#154734" }} />
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`transition-all duration-300 ${isAnim ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, # 0%, #1e5799 100%)",
              }}
            >
              {/* Quote Icon */}
            

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-88 h-74 rounded-2xl object-cover border-4 border-white/20"
                    />
                   
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Stars */}
                  

                  <p className="text-[#1e5799] text-lg leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div>
                    <p className="text-[#1e5799] font-black text-xl">{t.name}</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>

       
      </div>
    </section>
  );
}
