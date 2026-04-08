import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import oolm from "../pilden/oolm.png";
/* التخصصات */
const majors = [
  {
    title: "الطب البشري",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
    link: "https://wa.me/201002337674",
  },
  {
    title: "الهندسة",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    link: "https://wa.me/201002337674",
  },
  {
    title: "طب الأسنان",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/طب-الاسنان.png.webp",
    link: "https://wa.me/201002337674",
  },
  {
    title: "الأمن السيبراني",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
    link: "https://wa.me/201002337674",
  },
];

/* الخطوات */
const steps = [
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps.gif",
    title: "التسجيل وإنشاء حساب",
    desc: "قم بإنشاء حسابك بسهولة وابدأ رحلتك التعليمية معنا.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps2.gif",
    title: "البحث عن المنح",
    desc: "تصفح مجموعة كبيرة من المنح الدراسية واختر ما يناسب تخصصك.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps3.gif",
    title: "التقديم على المنحة",
    desc: "قم بتجهيز أوراقك وتقديم طلبك بكل سهولة.",
  },
];

/* الأسئلة */
const faqs = [
  {
    question: "كيف يمكنني بدء التقديم؟",
    answer:
      "يمكنك البدء بتسجيل حساب على منصة ريتال واتباع خطوات التقديم الخاصة بالمنحة.",
  },
  {
    question: "كم تستغرق عملية المعادلة؟",
    answer: "تستغرق عادة من أسبوعين إلى أربعة أسابيع.",
  },
  {
    question: "هل توفرون مساعدة في المنح؟",
    answer: "نعم نقدم استشارات كاملة ومتابعة للطلاب.",
  },
];

/* الصفحة */
export default function ScholarshipsPage() {
  const images = [oolm, ];

  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section className="bg-[#f2f9f5]">

      {/* الهيدر */}
      <div
        className="w-full h-96 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* <h1 className="text-white text-4xl font-bold relative z-10 text-center">
          الدراسية في الصين 
        </h1> */}
      </div>

      {/* التعريف */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div className="text-right space-y-6">
            <h2 className="text-3xl font-bold text-[#154734]">
              ادرس في مصر وابدأ رحلتك
            </h2>

            <p className="text-gray-600">
              توفر لك مصر تجربة تعليمية مميزة تجمع بين جودة التعليم
              وتكاليف مناسبة للطلاب الدوليين.
            </p>

            <a
              href="https://wa.me/201080016496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#154734] text-white px-6 py-3 rounded-lg hover:bg-[#123a2c]"
            >
              سجل الآن
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/hs5_2.webp"
              className="w-80"
            />
          </div>

        </div>
      </section>

      {/* الخطوات */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0d2b5e]">
          خطوات الحصول على منحة
        </h2>

        <div className="grid md:grid-cols-3 gap-10 container mx-auto px-4">
          {steps.map((step, i) => (
            <div key={i}>
              <img src={step.img} className="w-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/register"
            className="bg-[#154734] text-white px-6 py-3 rounded-full"
          >
            سجل الآن
          </Link>
        </div>
      </section>

      {/* التخصصات */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <h2 className="text-center text-3xl font-bold mb-10">
            أفضل التخصصات
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {majors.map((major, i) => (
              <a
                key={i}
                href={major.link}
                target="_blank"
                className="bg-white border rounded-xl p-6 text-center hover:shadow-lg"
              >
                <img
                  src={major.img}
                  className="w-12 h-12 mx-auto mb-4"
                />

                <h3 className="font-bold">{major.title}</h3>

                <p className="text-green-600 text-sm mt-1">
                  سجل الآن
                </p>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10 text-[#154734]">
            الأسئلة الشائعة
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl">

                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex justify-between w-full items-center"
                >
                  <h3 className="font-bold text-[#154734]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === idx && (
                  <p className="mt-4 text-gray-600">
                    {faq.answer}
                  </p>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* زر واتساب */}
      <a
        href="https://wa.me/201002337674"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

    

    </section>
  );
}
