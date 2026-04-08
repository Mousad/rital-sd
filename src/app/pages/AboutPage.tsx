import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TeamSection } from "../components/TeamSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import EgyptMap from "../components/EgyptMap";
import { ContactSection } from "../components/ContactSection";
import buack from "/src/app/pilden/buack.jpg";
import documVideo from "/src/app/pilden/docum.mp4";
import TimelineSection from "../components/TimelineSection"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0f7f3]">

      {/* ===== Back Button ===== */}
     

      {/* ===== Hero Section ===== */}
      <header
        className="relative bg-cover bg-center overlay-medium text-white"
       style={{
  backgroundImage: `url(${buack})`,
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

        aria-label="About Hero"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between text-right">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold">عن ريتال التعليمية</h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl text-white/90">
              من وحي التجربة والنجاح تأسست ريتال التعليمية عام 2012 لتقديم أفضل الاستشارات الأكاديمية للطلاب الدوليين، مع التركيز على الطلاب العرب.
            </p>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-4 py-6 bg-[#f2f9f5]">
  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* ===== الشطر النصي ===== */}
   

    {/* ===== الشطر الصوري + Counter ===== */}
    <div className="md:w-1/2 flex flex-col items-center space-y-6">
      {/* <img
        src="https://rital-sd.com/lovable-uploads/a5c80a15-6935-45ec-8852-551e961cc11f.png"
        alt="الدراسة في الخارج"
        className="rounded-3xl shadow-lg w-full max-w-md object-cover"
      /> */}

      {/* Counter */}
      <div className="flex justify-center">
  <div className="bg-[#154734] rounded-[20px] p-6 w-full max-w-md">
    <div className="text-center">
      <div className="text-[#f2f9f5] mb-">
        عدد الطلاب المسجلين من خلالنا على الجامعات
      </div>
      <div className="text-4xl font-bold text-[#f2f9f5]">
          15,000 
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
      </section>
      <TimelineSection />


       <section className="py-6 bg-[#f2f9f5]">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
    {/* الصورة */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/src/app/pilden/bsnk.jpg"
        alt="طلاب يركزون على التعلم عبر الإنترنت"
        className="rounded-xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

    {/* النص */}
    <div className="text-right">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#154734] mb-6">
من نحن ؟      </h2>
       <p className="text-gray-700 text-justify">
      فريق مختص بتقديم الخدمات الجامعية وعرض المعلومات الهامة المتعلقة بالتسجيل على الجامعات في مصر، الصين، الهند، رواندا، ماليزيا، وتركيا من خلال منصتنا الإلكترونية ريتال.
    </p>
    <p className="text-gray-700 text-justify">
      بفضل خبرة تمتد لأكثر من ست سنوات وفريق عمل من مختلف الجنسيات واللغات (العربية، التركية، الإنجليزية)، وبعد إثبات النجاح في تقديم أفضل العروض والخدمات للطلاب الراغبين بالدراسة في هذه الدول، تمكن فريقنا من كسب ثقة أكثر من 1000 طالب. ومن هنا أطلقنا رسمياً منصة ريتال لتكون الخيار الأول للطلاب الراغبين بالدراسة بشكل آمن ومضمون.
    </p>
    <p className="text-gray-700 text-justify">
      نمتلك مقومات النجاح من المعرفة باحتياجات الطلاب من خلال خبرتنا فيما يتعلق بالخدمات التعليمية وسابقة أعمالنا من خلال القبولات، والتي أثبتت أن فريقنا نجح في الحصول على سمعة طيبة. وبالتعامل معنا، أنتم أيضاً تشاركوننا هذا النجاح.
    </p>
    <p className="text-gray-700 text-justify">
      ريتال يضع في أولوياته مساعدة الطلاب الأجانب بشكل عام، والطلاب العرب بشكل خاص، عبر تقديم تسهيلات أكاديمية وخصومات دراسية استثنائية للطلاب الراغبين بالدراسة في هذه الدول. كما نوفر نظام إرشاد أكاديمي مميز لجميع المراحل الدراسية (بكالوريوس، ماجستير، دكتوراه) لنختصر المشوار عليهم ونقودهم لتحقيق أهدافهم في أقل مدة ممكنة.
    </p>
     
    </div>
  </div>
      </section>
      
      {/* ===== Content Section ===== */}
     <section className="container mx-auto px-4 py-16">
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* ===== كارت 1: رؤيتنا ===== */}
    <div className="flex-1 bg-gradient-to-br from-[#f2f9f5] to-[#f2f9f5] rounded-2xl p-6 shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-4 text-[#154734]">رؤيتنا</h3>
      <p className="text-gray-700">
        الموقع الأول في تقديم خدمات الدراسة للطلاب الراغبين بالدراسة في مصر، الصين، الهند، رواندا، ماليزيا، وتركيا بسرعة ودقة ومصداقية عالية.
      </p>
    </div>

    {/* ===== كارت 2: هدفنا ===== */}
    <div className="flex-1 bg-gradient-to-br from-[#f2f9f5] to-[#f2f9f5] rounded-2xl p-6 shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-4 text-[#154734]">هدفنا</h3>
      <p className="text-gray-700">
        الهدف هو أن تصل إلى جامعتك وكأنك تراها للمرة "الثانية". هذا هو مفهومنا للإستشارة التعليمية التي نقدمها لك في ريتال بكل أمانة.
      </p>
    </div>

    {/* ===== كارت 3: رسالتنا ===== */}
    <div className="flex-1 bg-gradient-to-br from-[#f2f9f5] to-[#f2f9f5] rounded-2xl p-6 shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-4 text-[#154734]">رسالتنا</h3>
      <p className="text-gray-700">
        رسالتنا هي خلق فرص تعليمية متميزة لطلابنا حول العالم في جامعات معروفة بإمكانياتها العلمية المتقدمة وبيئات التعليم الجذابة، ليحصل طلابنا على تجربة فريدة أثناء دراستهم في شتى المجالات.
      </p>
    </div>

  </div>
      </section>
            <EgyptMap />
      
<section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-[#154734] mb-4">أرقامنا العالمية</h2>
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20"
            style={{
              backgroundImage: "url('https://i.pinimg.com/736x/13/a0/bc/13a0bc98d420655a9370fa7516fb3098.jpg')",
            }}
          ></div>
          <div className="flex justify-center items-start gap-2">
            <div className="p-6 rounded-xl shadow">
              <p className="text-2xl font-bold text-[#154734]">500M</p>
            </div>
            <div className="p-6 rounded-xl shadow">
              <p className="text-2xl font-bold text-[#154734]">100K</p>
            </div>
            <div className="p-6 rounded-xl shadow">
              <p className="text-2xl font-bold text-[#154734]">200+</p>
            </div>
          </div>
        </div>
      </section>

<section className="container mx-auto px-4 py-6 bg-[#f2f9f5]">
  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* ===== الشطر النصي ===== */}
    <div className="md:w-1/2 space-y-6">
      <h5 className="text-xl font-semibold text-[#154734]">ماذا نقدم؟</h5>
      <p className="text-gray-700">
        نحن في ريتال نقدم لك خطةً متكاملةً لمسيرتك التعليمية، مبنيةً على دراسةٍ وتخطيطٍ مستمدٍ من خلاصة خبرتنا وتجاربنا، لتشعر معنا بأن مستقبلك الدراسي في أمانٍ، وبأفضل وأنسب خيارٍ ممكن.
      </p>

      <div className="border-t-2 border-gray-300 w-16 my-4"></div>

      <h5 className="text-xl font-semibold text-[#154734]">نرسم مستقبلك الأكاديمي:</h5>
      <p className="text-gray-700">
        بدءاً بتقديم الاستشارة الكاملة، مروراً بالتوجيه وتقييم الخيارات، وصولاً لحجز مقعدك الجامعي في واحدة من أفضل الجامعات في مصر، الصين، الهند، رواندا، ماليزيا، وتركيا.
      </p>
    </div>

    {/* ===== الشطر الصوري + Counter ===== */}
    <div className="md:w-1/2 flex flex-col items-center space-y-6">
      <video
  src={documVideo}
  className="rounded-3xl shadow-lg w-full max-w-md h-[500px] object-cover"
  autoPlay
  loop
  muted
  playsInline
/>


      {/* Counter */}
      <div className="flex justify-center">
  <div className="bg-[#154734] rounded-[20px] p-6 w-full max-w-md">
    <div className="text-center">
      <div className="text-[#f2f9f5] mb-">
        عدد الطلاب المسجلين من خلالنا على الجامعات
      </div>
      <div className="text-4xl font-bold text-[#f2f9f5]">
        1,432+
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
</section>
      

   
      

      {/* ===== Why Rital Section ===== */}
      <section className="py-6 bg-[#f2f9f5]">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="text-[#154734]">لماذا </span>مؤسسة ريتال التعليمية؟
            </h2>
          </div>
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-700">
              مؤسسة ريتـتال التعليمية الرائدة في مجال التعليم العالي على مستوى العالم...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  تعد ريتـتال المؤسسة التعليمية الوحيدة في تركيا التي حازت على شهادة الآيزو...
                </li>
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  اتفاقيات المؤسسة تنحصر فقط مع الجامعات التركية المعتمدة...
                </li>
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  يستطيع الطالب تتبع طلب التسجيل الخاص به من خلال النظام الإلكتروني...
                </li>
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  ضمان حصول الطالب على العروض الأكثر توفيراً له...
                </li>
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  فريقنا مدرب ومؤهل للعمل الأكاديمي...
                </li>
                <li className="flex items-start">
                  <img src="https://unitededucation.com/_next/static/media/check_circled.a7e64ca5.svg" alt="check" className="w-4 h-4 mt-1 mr-4 flex-shrink-0" />
                  الخدمات الشمولية التي تضمن الاستمرار مع الطالب...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      

      {/* ======= زر واتساب عائم ======= */}
        <a
          href="https://wa.me/201000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
            {/* <TeamSection /> */}


    </div>
  );
}