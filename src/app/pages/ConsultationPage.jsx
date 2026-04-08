// src/app/pages/CoursesPage.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function CoursesPage() {
  // الداتا الخاصة بالكورسات والدورات التدريبية
  const courses = [
    {
      id: 1,
      title: "كورسات تعليمية معتمدة",
      description: [
        "دورات  معتمدة  ",
        "مواد تعليمية ",
        "شهادات معترف ",
      ],
    },
    {
      id: 2,
      title: "دورات تطوير المهارات",
      description: [
        "تنمية المهارات  ",
        "إدارة الوقت  ",
        "مهارات القيادة  ",
      ],
    },
    {
      id: 3,
      title: "برامج تحضيرية للدراسة بالخارج",
      description: [
        " اللغة الإنجليزية",
        " للقبول الجامعي",
        "ارشادات وإرشادات  ",
      ],
    },
    {
      id: 4,
      title: "استخراج شهادات وتوثيق ",
      description: [
        "تحضير  الشهادات ",
        " توثيق شهادات",
        "شهادات ثامن وثانوي",
      ],
    },
  ];

  // الصور المتغيرة في الخلفية
  const images = [
    "https://i.pinimg.com/736x/58/05/98/580598a49346ea48354bdba4654e3b7a.jpg",
    "https://unitededucation.com/_next/image?url=img%2F%D9%85%D8%AF%D8%A7%D8%B1%D8%B3%D9%86%D8%A7-09-2.webp&w=3840&q=75",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // تغيير الصورة كل 20 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="min-h-screen relative">
      {/* سهم الخروج ثابت */}
     {/* <div className="sticky top-[60px] z-10 px-4 py-2">
  <Link
    to="/"
    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-[#154734] hover:text-[#0f2d1f]"
  >
    <ArrowRight className="w-5 h-5" />
  </Link>
</div> */}

      {/* الخلفية المتغيرة */}
      <div
        className="w-full h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center z-10">
             استشارات دراسية 
        </h1>
      </div>

      {/* محتوى الصفحة */}
      <div className="container mx-auto px-4 py-10 space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#f2f9f5] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-[#154734] mb-4">
                {course.title}
              </h2>
              <ul className="list-decimal list-inside text-gray-700 space-y-1">
                {course.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* القسم النصي مع الصورة */}
      <div className="container mx-auto py-5 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* النص */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1 flex items-center justify-center">
            <p className="text-gray-700 text-lg">
              هل تريد تعزيز مهاراتك والحصول على فرصة حقيقية للتميز الأكاديمي
              والمهني؟ 🌟 منصة ريتال تقدم لك مجموعة من الكورسات والدورات التدريبية
              المعتمدة، لتطوير مهاراتك وتحضيرك للجامعات الدولية والفرص المستقبلية.
              سجّل الآن وابدأ رحلتك نحو التميز مع أفضل الخبراء والإرشاد خطوة بخطوة
            </p>
          </div>

          {/* الصورة */}
          <div className="w-full order-1 lg:order-2 flex items-center justify-center lg:justify-end py-5">
            <img
              src="https://unitededucation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSec1cer.6affd1d8.png&w=640&q=75"
              alt="image-certificate"
              className="w-72 h-auto"
            />
            
          </div>
          
        </div>
      </div>

     <section className="container mx-auto px-4 py-1">
     <div className="bg-[#0d2b5e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* الأيقونة + النص */}
    <div className="flex items-center gap-4 text-white">
      <img
        src="https://trueuniv.com/wp-content/uploads/2025/05/svgviewer-png-output.png"
        alt="icon"
        className="w-12 h-12 text-white"
      />

      <div>
        <h3 className="text-xl font-bold">دعنا نساعدك</h3>
        <p className="text-gray-200">
          ابحث عن جامعتك وتخصصك المناسب لك
        </p>
      </div>
    </div>

    {/* زر التواصل */}
    <a
      href="https://api.whatsapp.com/send/?phone=905315016019"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-[#154734] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      تواصل معنا
    </a>

  </div>
</section>


<div className="space-section py-16">
  <div className="container mx-auto">
    {/* العنوان */}
    <div className="big-title text-center mb-8">
      <h2 className="text-3xl font-bold text-[#154734]">التواصل معنا</h2>
      <p className="mt-2 text-gray-700">
        خطوات سهلة وواضحة لتسجيلك في الكورسات والدورات التدريبية.
      </p>
    </div>

    {/* الخطوات */}
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
      {/* الخطوة 1 */}
      

      {/* الخطوة 2 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="bg-white p-4 rounded-full shadow-md">
          <div className="bg-[#ffa92f] w-20 h-20 flex items-center justify-center rounded-full">
            
            <img
              src="https://unitededucation.com/unitedv6/con1.png"
              alt="step 2"
              className="w-16 h-16 absolute"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#154734]">التواصل</h3>
        <div className="mt-4 flex flex-col items-center">
  <p className="text-gray-700 text-center">
    يتم من خلال التواصل تحديد الفئة العمرية والمنهاج المناسب والمرحلة التعليمية بالإضافة لعنوان السكن الخاص بالطالب.
    للتواصل السريع، يمكنك مراسلتنا عبر واتساب:
  </p>

  {/* زر واتساب */}
  
</div>
      </div>

      {/* الخطوة 3 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="bg-white p-4 rounded-full shadow-md">
          <div className="bg-[#3152af] w-20 h-20 flex items-center justify-center rounded-full">
            
            <img
              src="https://unitededucation.com/unitedv6/sen3.png"
              alt="step 3"
              className="w-16 h-16 absolute"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#154734]">إرسال صور الوثائق المطلوبة</h3>
        <p className="text-gray-600 text-sm">شهادات السنوات السابقة، إثبات شخصية للطالب، صور شخصية، شهادة الميلاد.</p>
      </div>

      {/* الخطوة 4 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="bg-white p-4 rounded-full shadow-md">
          <div className="bg-[#ecd00b] w-20 h-20 flex items-center justify-center rounded-full">
            
            <img
              src="https://unitededucation.com/unitedv6/up4.png"
              alt="step 4"
              className="w-16 h-16 absolute"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#154734]">تحصيل القبول</h3>
        <p className="text-gray-600 text-sm">
          يقوم فريقنا بتحصيل القبول وتحديد موعد لمرافقة الطالب إلى المدرسة وإتمام إجراءات التسجيل.
        </p>
    <div className="text-center mt-6">
              <a
                href="https://wa.me/+201117740555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> تواصل واتساب
              </a>
            </div>
      </div>
    </div>
  </div>
  
</div>

{/* ======= زر واتساب عائم ======= */}
        <a
          href="https://wa.me/201000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-10 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
          

    </div>
          
    
  );
}