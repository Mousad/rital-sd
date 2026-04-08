import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import UniversitiesSlider from "../components/niversitiesSlider";

import card from "../pilden/card.png";
import akib from "../pilden/akib.png";


const majors = [
  {
    title: "الطب البشري",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "الهندسة",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
  },
  {
    title: "طب الأسنان",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/طب-الاسنان.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: " السيبراني",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
  },
  {
    title: "الصيدلة",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الصيدلة.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "القانون",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "التمريض",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/التمريض.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "AI",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
  },
];
const scholarships = [
  {
    title: "منحة جامعة الملك عبدالله",
    image: "https://studyshoot.com/wp-content/uploads/2025/11/ssc-41.jpg",
    
    
    description: "منحة ممولة في تخصصات العلوم والتقنية لجميع الطلاب.",
    link: "#",
  },
  {
    title: "منحة جامعة ميلانو",
    image: "https://studyshoot.com/wp-content/uploads/2025/08/th-25.jpg",
    country: "ايطاليا",
  
    description: "فرصة مميزة للدراسات العليا في إيطاليا.",
    link: "#",
  },
  {
    title: "منحة هنغاريا",
    image: "https://studyshoot.com/wp-content/uploads/2025/10/image-thumb-studyshoot-website-68.jpg",
    country: "هنغاريا",
   
    description: "منحة حكومية لتعزيز التعليم الدولي.",
    link: "#",
  },
  {
    title: "منحة جامعة نابولي",
    image: "https://studyshoot.com/wp-content/uploads/2024/12/Copy-of-studyshoot-th-fb-4.jpg",
    country: "ايطاليا",
   
    description: "برامج أكاديمية متكاملة للطلاب الدوليين.",
    link: "#",
  },
  {
    title: "منحة جامعة نابولي",
    image: "https://studyshoot.com/wp-content/uploads/2025/11/5-41.jpg",
    country: "ايطاليا",
   
    description: "برامج أكاديمية متكاملة للطلاب الدوليين.",
    link: "#",
  },
];

const steps = [
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps.gif",
    title: " وإنشاء حساب",
    desc: "قم بإنشاء حسابك بسهولة وابدأ رحلتك التعليمية معنا للحصول على أفضل الفرص الدراسية.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps2.gif",
    title: "البحث عن المنح",
    desc: "تصفح مجموعة كبيرة من المنح الدراسية واختر ما يناسب تخصصك واهتماماتك.",
  },
  {
    img: "https://d2w7l1p59qkl0r.cloudfront.net/static/images/newb4s-steps3.gif",
    title: "التقديم  ",
    desc: "قم بتجهيز أوراقك وتقديم طلبك للمنحة التي تناسبك بكل سهولة.",
  },
];

const faqs = [
  {
    question: "كيف يمكنني بدء التقديم",
    answer:
      "يمكنك البدء بتسجيل حساب على منصة ريتال واتباع خطوات التقديم الخاصة بالمنحة التي ترغب بها.",
  },
  {
    question: "ﻋﻦ اﻟﺒﺮﻧﺎﻣﺞ",
    answer:
    "ﺑﺮﻧﺎﻣﺞ اﻟﻤﻨﺢ اﻟﺪوﻟﻴﺔ اﻟﺬي ﺗﻘﺪﻣﻪ رﻳﺘﺎل ﻳﺮﻛﺰﻋﻠﻰ ﺗﻮﻓﻴﺮ اﻟﺪﻋﻢ اﻟﻜﺎﻣﻞ ﻟﻠﻄﻼب اﻟﺴﻮداﻧﻴﻴﻦاﻟﻤﻬﺘﻤﻴﻦ ﺑﺎﻟﺤﺼﻮل ﻋﻠﻰ ﻣﻨﺢ دراﺳﻴﺔ ﻓﻲﻣﺨﺘﻠﻒ اﻟﺠﺎﻣﻌﺎت اﻟﻌﺎﻟﻤﻴﺔ. ﻳﻬﺪف اﻟﺒﺮﻧﺎﻣﺞإﻟﻰ ﺗﺴﻬﻴﻞ وﺻﻮل اﻟﻄﻼب اﻟﺴﻮداﻧﻴﻴﻦ إﻟﻰاﻟﻔﺮص اﻟﺘﻌﻠﻴﻤﻴﺔ اﻟﺪوﻟﻴﺔ، ﻣﻊ اﻟﺘﺮﻛﻴﺰ ﻋﻠﻰﺗﻘﺪﻳﻢ اﻟﻤﻌﻠﻮﻣﺎت اﻟﻼزﻣﺔ وﺧﺪﻣﺎت اﻟﺘﻘﺪﻳﻢﺑﺸﻜﻞ اﺣﺘﺮاﻓﻲ",
  },
  {
    question: "هل بنقدم مساعدة لي منح",
    answer:
      "نعم، نقدم استشارات كاملة ومتابعة للمنح الدراسية لتسهيل عملية التقديم على الطلاب.",
  },
  {
    question: "ما هي رسوم الخدمات",
    answer:
      "الرسوم تختلف حسب نوع الخدمة، ويمكنك التواصل مع فريقنا لمعرفة التفاصيل الدقيقة.",
  },
];

export function ScholarshipsPage() {

  const images = [card];

  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section id="ScholarshipsPage" className="bg-[#f2f9f5] min-h-screen overflow-x-hidden">

      <div className="min-h-screen relative overflow-x ">

        
       <div className="w-full h-60 md:h-66 flex items-center justify-center">
 <img
  src={images[currentImage]}
  className="w-full h-full "
  alt=""
/>
       </div>
       <div className="flex justify-center gap-50 py-0">  
  <div className="w-[2px] h-12 bg-[#0d2b5e]"></div>
  
  {/* <div className="w-[2px] h-12 bg-[#ff3131]"></div> */}
  <div className="w-[2px] h-12 bg-[#0d2b5e]"></div>
       </div>
        
        <section className="py-0 bg-[#f2f9f5]" >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-right space-y-6 ">                  
         <h1 className="text-3xl text-center font-bold px-14 text-[#0d2b5e] border-2 border-[#0d2b5e] px-6 py-3 ">
         منح ريتال التعليمية
         </h1>
 
        <p className="text-gray-600 leading-8">
          نفتح لك أبواب المستقبل بثقة  
        في <span className="text-red-500 font-semibold">ريتال التعليمية</span> لا نقدّم مجرد منح دراسية… بل نصنع لك فرصة حقيقية للانطلاق نحو تعليم عالمي وتجربة تغيّر حياتك.

نوفر أكثر من 120 منحة دراسية سنويًا، ما بين منح كاملة وجزئية، بالتعاون مع جامعات وشركاء دوليين معتمدين، لنساعدك تختار المسار الأنسب لطموحاتك.

نرافقك خطوة بخطوة       .

</p>
 
            </div>

           

          </div>
        </section>
              
           <section className=" relative overflow-hidden">
       <div className="container mx-auto px-4">   
    <div className="grid md:grid-cols-2 gap-12 items-center relative">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-red-500 rounded-tl-[120px] -z-10"></div>
      <div className="relative flex justify-center">
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#0d2b5e] mb-6">
          مميزات تقديم منحة من <span className="text-red-500 font-semibold">ريتال </span>     
        </h3>
         
<p className="text-gray-600 leading-8 mb-6">
تتألّق <span className="text-red-500 font-semibold">ريتال</span> في مجال المبادرات المجتمعية من خلال مجموعة برامج نوعية مستقلة، تُدار بإشراف فرق محترفة ذات خبرة عالية.

وقد حققت هذه البرامج نجاحًا واسعًا، حيث استفاد منها أكثر من 4,000 مشارك، مع نسب إتمام مميزة تصل إلى 95٪، مما يعكس جودة التنفيذ وثقة المستفيدين.

هذا النجاح المستمر يؤكد التزام ريتال بتقديم قيمة حقيقية، وصناعة أثر إيجابي ملموس في حياة الأفراد والمجتمع.
</p>

        <ul className="space-y-4 text-gray-700">
  <li>✔ فرص منح دراسية في جامعات عالمية معتمدة.</li>
  <li>✔ برامج أكاديمية متنوعة تناسب مختلف التخصصات.</li>
  <li>✔ دعم كامل في اختيار الجامعة والتخصص المناسب.</li>
  <li>✔ إرشاد خطوة بخطوة حتى الحصول على القبول.</li>
</ul>
      </div>

    </div>
  </div>
      </section>

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
      


        
        <section className="py-16">
  <div className="container mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-8">
      خطوات المنحة مع ريتال
    </h2>
    

    <div className="grid grid-cols-3 gap-4">

      {steps.map((step, index) => (
        <div key={index} className="text-center">

          <img
            src={step.img}
            alt={step.title}
            className="w-16 h-16 mx-auto mb-2 text-[#f0f7f3]"
          />

          <h3 className="text-sm md:text-lg font-bold text-[#0d2b5e]">
            {step.title}
          </h3>

        </div>
      ))}

    </div>

  </div>
</section>


        
        <section className="py-8">

          <div className="container mx-auto px-4">

            <h2 className="text-center text-3xl font-bold mb-12">
              أفضل التخصصات
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {majors.map((major, index) => (
                <a
                  key={index}
                  href={major.link || "#"}
                  className="bg-white border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg"
                >

                  <img
                    src={major.img}
                    alt={major.title}
                    className="w-10 h-10 object-contain mb-4"
                  />

                  <h3 className="font-bold mb-1">
                    {major.title}
                  </h3>

                  <p className="text-green-600">
                    سجل الآن
                  </p>

                </a>
              ))}

            </div>

          </div>

        </section>

    
        <section className="py-8">

          <div className="container mx-auto px-4">

            <h2 className="text-3xl font-bold text-center mb-12 text-[#154734]">
              الأسئلة الشائعة
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl">

                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center"
                  >
                    <h3 className="font-bold text-[#154734]">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openFAQ === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFAQ === idx && (
                    <p className="mt-4 text-gray-700">
                      {faq.answer}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        
        <a
          href="https://wa.me/+201002337674"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-10 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

      </div>

    </section>
  );
}
