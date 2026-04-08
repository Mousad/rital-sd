import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const stepks = [
  {
    title: "إنشاء حساب الطالب وتجهيز الملف",
    

  },
  {
    title: "القبول النهائي والتاشيرة الدراسية",
   
  },
   {
    title: "التوثيق وتسليم الملف للجامعة",
   
  },
   {
    title: "اﻟﺘﻘﺪﻳﻢ اﻟﻠﻜﺘﺮوﻧﻲ واﻟﺴﺪاد",
    
  },
  {
    title: "القبول المبدئي والسداد",
   
  },
 
 
  
];
const universities = [
    {
      title: "الجامعات الحكومية",
      count: "25+ جامعة",
      desc: "جامعة القاهرة، عين شمس، الإسكندرية وأكثر من 25 جامعة حكومية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#0d2b5e]"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
      ),
    },
    {
      title: "الجامعات الخاصة",
      count: "30+ جامعة",
      desc: "الجامعة الأمريكية، الألمانية، البريطانية وأكثر من 30 جامعة خاصة",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#0d2b5e]"><path d="M15 13a3 3 0 1 0-6 0"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><circle cx="12" cy="8" r="2"></circle></svg>
      ),
    },
    {
      title: "الجامعات التكنولوجية",
      count: "15+ جامعة",
      desc: "جامعات متخصصة في التكنولوجيا والعلوم التطبيقية الحديثة",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#0d2b5e]"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      ),
    },
  ];

    const documents = [
    {
      title: "جواز السفر",
      desc: "يشترط ان يكون ساري او عليه تمديد لمدة 6 أشهر يمكن لطالبني اللجوء التقديم بكرات المفوضية",
    },
    {
      title: "الشهادة الثانوية",
      desc: "يحتاج الطالب صورة فقط في التقديم الالكتروني وبعد القبول يحتاج الطالب الأصل من الشهادة. يجب ان يكون علي الشهادة كل التوقيعات المطلوبة",
    },
    {
      title: "شهادة الميلاد",
      desc: "صورة في المرحلة الاولى من التقديم والأصل بعد القبول. يمكن للطالب ارفاق أي شهادة تحتوي علي اسم الوالدة كدليل لشهادة الميلاد",
    },
    {
      title: "صورة شخصية",
      desc: "عدد 8 صور شخصية بخلفية بيضاء. يشترط ان تكون حديثة وبلبس رسمي",
    },
  ];
 const services = [
    "تقديم معلومات تفصيلية عن الكليات ",
    "تقييم شامل للقدرات والمعدل",
    "المساعدة في تجهيز وتجميع المستندات ",
    "توفير دورات تحضيرية لاختبارات القدرات",
    "توجيه شامل بعد القبول",
    "المساعدة في إجراءات الكشف الطبي ",
  ];

   const servicces = [
    {
      title: "تقييم شامل للقدرات والمعدل",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      ),
    },
    {
      title: "معلومات  عن الكليات",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
      ),
    },
    {
      title: "تجهيز المستندات",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      ),
    },
    {
      title: "دورات تحضيرية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
    },
    {
      title: "توجيه ما بعد القبول",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
      ),
    },
    {
      title: "الكشف الطبي والتنسيق",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0d2b5e]"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
      ),
    },
  ];
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
    title: " السيبراني",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
    link: "https://wa.me/201002337674",
  },
];

/* الخطوات */
const steps = [
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps.gif",
    title: "التسجيل  ",
    desc: "قم بإنشاء حسابك بسهولة وابدأ رحلتك التعليمية معنا.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps2.gif",
    title: "متابعة",
    desc: "تصفح مجموعة كبيرة من المنح الدراسية واختر ما يناسب تخصصك.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps3.gif",
    title: "التقديم  ",
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
  const images = [
    "https://i.pinimg.com/736x/40/53/56/4053568214a77cb11b36191712095b81.jpg",
    "https://www.sabanciuniv.edu/sites/default/files/inline-images/footer2-1.png",
  ];

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
        className="w-full h-76 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="text-white text-4xl font-bold relative z-10 text-center">
         التقديم للجامعات المصرية          </h1>
       </div>

      {/* التعريف */}
      <section className="py-16 bg-[#0d2b5e]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div className="text-right space-y-6">
            <h2 className="text-3xl font-bold text-[#f2f9f5]">
             مستقبلك الأكاديمي في مصر
            </h2>

            <p className="text-[#f2f9f5]">
             رﻳﺘـ ﺎل ﻟﻠﺨﺪﻣﺎت اﻟﺘﻌﻠﻴﻤﻴﺔ ﻫﻲ اﻟﺬراع اﻷﻛﺎدﻳﻤﻲ ﻟﺸﺮﻛﺔ ﻧﻮﺑﺎﺗﻴﺎ ﻟﻠﺨﺪﻣﺎت اﻟﺘﻌﻠﻴﻤﻴﺔ،
ﺗﺄﺳﺴﺖ ﻓﻲ ﻣﺼﺮ ﻋﺎم 2019، وأﺻﺒﺤﺖ اﻟﻴﻮم واﺣﺪة ﻣﻦ أﻛﺒﺮ وأﻗﻮى اﻟﻤﺆﺳﺴﺎت
اﻟﺘﻌﻠﻴﻤﻴﺔ اﻟﻤﺘﺨﺼﺼﺔ ﻓﻲ ﺗﺄﻣﻴﻦ ﻓﺮص اﻟﺪراﺳﺔ ﺑﺎﻟﺨﺎرج ﻟﻠﻄﻼب اﻟﺴﻮداﻧﻴﻴﻦ.
ﺑﻔﻀﻞ ﺧﺒﺮة ﻓﺮﻳﻘﻬﺎ اﻟﻤﺤﺘﺮف، وﺷﺒﻜﺔ ﻋﻼﻗﺎﺗﻬﺎ اﻟﻤﺒﺎﺷﺮة ﻣﻊ أﺑﺮز اﻟﺠﺎﻣﻌﺎت ﻓﻲ ﻣﺼﺮ،
ﺗﺮﻛﻴﺎ، اﻟﺼﻴﻦ، اﻟﻬﻨﺪ، رواﻧﺪا، واﻟﻔﻠﺒﻴﻦ، اﺳﺘﻄﺎﻋﺖ رﻳﺘﺎل أن ﺗﻀﻊ ﺑﺼﻤﺘﻬﺎ ﻛﺎﺳﻢ ﻣﻮﺛﻮق
وﻣﻌﺘﻤﺪ ﻓﻲ ﻗﻄﺎع اﻟﺘﻌﻠﻴﻢ اﻟﺪوﻟﻲ.
            </p>

          
          </div>

          <div className="flex justify-center">
            <img
              src="https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/hs5_2.webp"
              className="w-80"
            />
          </div>
          <div className="text-right space-y-1">
            

            

            <a
              href="https://wa.me/201080016496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#154734] text-white px-6 py-3 rounded-lg hover:bg-[#123a2c]"
            >
              سجل الآن
            </a>
          </div>

        </div>
      </section>
   <section className="py-5 px-4 bg-[#0d2b5e]">
  <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
    الأوراق المطلوبة للتقديم في الجامعات
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-white">
    {documents.map((doc, idx) => (
      <div
        key={idx}
        className="relative flex border-b border-white"
      >
        {/* الخط العمودي في المنتصف */}
        <div className="absolute top-0 bottom-0 right-1/1 w-[1px] bg-white"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-white"></div>
        <div className="absolute top-0 bottom-0 left-1/1 w-[1px] bg-white"></div>

        <div className="w-1/2 p-1 flex items-center justify- text-[#d4aa6b] font-bold text-sm">
          {doc.title}
        </div>
        <div className="w-1/1 p-2 flex items-center justify-center text-white text-sm">
          {doc.desc}
        </div>
      </div>
    ))}
  </div>
</section>

<section className="py-10 px-4 bg-[#0d2b5e]">
  <div className="relative max-w-3xl mx-auto">
    {/* الخط العمودي على اليمين */}
    <div className="absolute right-5 top-0 bottom-0 w-1 bg-blue-600/50"></div>

    {stepks.map((step, index) => (
      <div key={index} className="flex items-start mb-6 relative">
        {/* الدائرة على الخط */}
        <div className="absolute right-3 top-5 w-5 h-5 rounded-full border-2 border-blue-600 bg-white z-"></div>

        {/* المحتوى يتحرك على الشمال */}
        <div className={`mr-9 p-3 rounded-lg 
            ${index % 2 === 0 ? 'bg-blue-600 text-white' : 'bg-yellow-200 text-[#1c2b50]'}`}>
          <h3 className="font-bold text-lg mb-2">{step.title}</h3>
          <p className="text-sm">{stepks.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>





         <section className="py-6 bg-[#0d2b5e] relative">
      <div className="container mx-auto px-4">

        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f2f9f5] mb-6 tracking-tight">
            خدماتنا المتكاملة
          </h2>

          <p className="text-lg text-[#f2f9f5] leading-relaxed font-light max-w-2xl mx-auto">
            دعم شامل لضمان نجاح تقديمك للجامعات المصرية
          </p>
        </div>

        {/* الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-6 rounded-xl bg-white border border-gray-100 hover:border-green-200 transition-all duration-300 shadow-sm"
            >

              {/* الدائرة */}
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0"></div>

              <span className="text-gray-700 leading-relaxed">
                {service}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
      {/* الخطوات */}
     <section className="py-6 bg-[#0d2b5e] text-center">
  <h2 className="text-3xl font-bold mb-10 text-[#f2f9f5]">
    خطوات الحصول على منحة
  </h2>

 <div className="flex justify-between px-4">
  {steps.map((step, i) => (
    <div key={i} className="flex-1 mx-2 text-center">
      <img src={step.img} className="w-20 mx-auto mb-4" />
      <h3 className="font-bold text-[#f2f9f5] text-lg">{step.title}</h3>
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
      <section className="py-10 bg-[#0d2b5e]">
        <div className="container mx-auto px-4">

          <h2 className="text-center  text-[#f2f9f5] text-3xl font-bold mb-10">
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

                
              </a>
            ))}

          </div>
        </div>
      </section>

      <section className="py-10 relative bg-[#0d2b5e] overflow-hidden">
  <div className="absolute inset-0 bg opacity-30"></div>

  <div className="container mx-auto relative z- px-2">

    {/* العنوان */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#f2f9f5] mb-6 tracking-tight">
        خدمات تفصيلية
      </h2>
      <p className="text-lg  text-[#f2f9f5] leading-relaxed font-light max-w-2xl mx-auto">
        نقدم مجموعة متكاملة من الخدمات المصممة خصيصًا لطلاب الجامعات المصرية
      </p>
    </div>

    {/* الكروت */}
    <div className="grid grid-cols-2 gap-4">
      {servicces.map((servicces, idx) => (
        <div
          key={idx}
          className="bg-white/90 backdrop-blur-sm rounded-1xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center hover:scale-105"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 bg-[#0d2b5e]/10 rounded-xl mb-4">
            {servicces.icon}
          </div>
          <h3 className="text-sm font-bold text-[#0d2b5e] mb-2 tracking-tight">
            {servicces.title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light text-sm">
            {servicces.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-10 relative bg-[#0d2b5e]">
      <div className="container mx-auto px-4">

        {/* العنوان */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-2xl font-bold text-[#f2f9f5] mb-2 tracking-tight">
            أنواع الجامعات المتاحة
          </h2>
          <p className="text-lg  text-[#f2f9f5] leading-relaxed font-light max-w-3xl mx-auto">
            نغطي جميع أنواع الجامعات في مصر لنوفر لك أفضل الخيارات التعليمية
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#feeaeb]/20 to-[#e9e8ee]/20 backdrop-blur-sm border border-gray-200 mb-">
                  {uni.icon}
                </div>
                <div className="text-sm font-bold text-[#16a085] mb-2">{uni.count}</div>
                <h3 className="text-2xl font-bold text-[#0d2b5e] mb-4 tracking-tight">{uni.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{uni.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


      {/* FAQ */}
      <section className="py-10 bg-[#0d2b5e]">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-10 text-[#f2f9f5]">
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
