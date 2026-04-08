// ServicesPage.jsx
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";



const services = [
  // الخدمات الأساسية (للبطاقات التفاعلية)
  { id: 1, title: "المنح", textColor: "text-[#154734]", link: "/services/scholarships" },
  { id: 2, title: "شهادات", textColor: "text-[#154734]", link: "/services/certificate-services" },
  { id: 3, title: "الاستشارات", textColor: "text-[#154734]", link: "/services/consultation" },
  { id: 4, title: "الكورسات", textColor: "text-[#154734]", link: "/services/courses" },
  // باقي الخدمات العامة والطلابية كما قبل
  { id: 5, details: ["مصر", "الصين", "الهند", "رواندا", "ماليزيا", "تركيا"] },
  { id: 6, title: "استفادة من الملفات الأكاديمية", details: ["تجهيز ملفات التقديم كاملة", "توثيق المستندات", "متابعة حالة الطلبات"] },
  { id: 7, title: "الاستشارة المجانية حول الدراسة في الجامعات التركية", text: "يقدم لكم كادرنا المؤلف من أكثر من ٧٠ مستشاراً تعليمياً جميع المعلومات التي تخص الدراسة في تركيا والجامعات التركية والوضع المعيشي فيها.", icon: "https://api.unitededucation.com.tr/services/الاستشارة المجانية.svg", bg: "bg-[#1142B2]", textColor: "text-white" },
  { id: 8, title: "توجيه النصائح فيما يتعلق باختيار التخصص المناسب لك", text: "بعد أن يقوم المستشار التعليمي بالتعرف على الطالب وتحديد طلباته واهتمامه يقوم بتوجيه النصائح عن التخصصات الأنسب له.", icon: "https://api.unitededucation.com.tr/services/توجيه الطلاب.svg", bg: "bg-[#F1D013]", textColor: "text-black" },
  { id: 9, title: "مساعدتك في اختيار الجامعة المناسبة", text: "بعد تحديد التخصص الأنسب للطالب يقوم مستشارنا بتقديم أفضل الخيارات للجامعات التي تدرس التخصصات المطلوبة.", icon: "https://api.unitededucation.com.tr/services/مساعدتك في اختيار الجامع.svg", bg: "bg-[#F1D013]", textColor: "text-black" },
  { id: 10, title: "تحصيل القبولات الجامعية مجاناً", text: "بعد تحديد الجامعات والتخصصات ما على الطالب إلا إرسال الوثائق المطلوبة ونحن نقوم بجميع الإجراءات للحصول على القبول.", icon: "https://api.unitededucation.com.tr/services/قبول-جامعي.svg", bg: "bg-[#1142B2]", textColor: "text-white" },
];

export function ServicesPage() {
  const navigate = useNavigate();
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const whatsappNumbers = [
    { number: "+917736111588", label: "منحة"  } ,
    { number: "+917736111589", label: "كوسات" },
  ];

  return (
    <div className="w-full">

      {/* العودة للخدمات */}
      

      {/* ===== Hero Section ===== */}
      
    <div className="relative h-80 w-full">
        <img
          src="	https://rital-sd.com/lovable-uploads/a5c80a15-6935-45ec-8852-551e961cc11f.png"
          alt="certificate"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-2xl font-bold mb-4">
             خدمات ريتال التعليمية
          </h1>

         
        </div>
      </div>

     

      {/* ===== المؤسسة Section ===== */}
      <section className="py-20 bg-[#f2f9f5] flex justify-center">
        <div className="relative w-full max-w-6xl p-1 md:p-10 border-4 border-[#154734] rounded-t-[200px] flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg">
          <div className="flex-1 flex justify-center">
           
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000]">
              مؤسسة <span className="text-[#154734]">ريتال الخدمية</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              تقدم المؤسسة جميع الخدمات القانونية في تركيا بجودة ومصداقية عالية...
            </p>
          </div>
        </div>
      </section>

       {/* ===== Main Services Section ===== */}
      {/* <section className="py-10 bg-[#f2f9f5]">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#154734]">
            الخدمات الرئيسية
          </h2>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-8">
          {services.filter(s => s.id <= 4).map((service, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform ${service.bg} ${service.textColor}`}
              onClick={() => navigate(service.link)}
            >
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* ===== Student Services Section ===== */}
      {/* <section className="py-8 bg-[#f2f9f5]">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#154734]">الخدمات الطلابية</h2>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.filter(s => s.id > 6).map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-xl overflow-hidden ${service.bg} ${service.textColor}`}
            >
              <div className="flex justify-center mb-6">
                <img src={service.icon} alt="service" className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center leading-relaxed">{service.title}</h3>
              <p className="text-sm leading-relaxed text-center opacity-90">{service.text}</p>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="py-20 relative">
  <div className="container mx-auto px-4">
    <div className="space-y-24">

      {/* الدراسة بالخارج */}
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        {/* الايقونة */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#154734]/10 relative overflow-hidden group hover:scale-105 transition-all duration-500">

            <div className="absolute inset-0 opacity-20 bg-[#feeaeb]"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-[#154734] relative z-10 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>

          </div>
        </div>

        {/* النص */}
        <div className="w-full md:w-2/3 space-y-6">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#154734] mb-4">
              الدراسة بالخارج
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              نوفر فرص الدراسة في أفضل الجامعات العالمية مع خدمات متكاملة تشمل:
            </p>
          </div>

          {/* الخدمات */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border hover:border-[#154734]/20 transition">
              <div className="w-2 h-2 rounded-full bg-[#1f4385] mt-2"></div>
              <span>استشارات اختيار الجامعة والتخصص المناسب</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border hover:border-[#154734]/20 transition">
              <div className="w-2 h-2 rounded-full bg-[#1f4385] mt-2"></div>
              <span>إعداد وتجهيز ملفات التقديم</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border hover:border-[#154734]/20 transition">
              <div className="w-2 h-2 rounded-full bg-[#1f4385] mt-2"></div>
              <span>المساعدة في كتابة السيرة الذاتية وخطابات التوصية</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border hover:border-[#154734]/20 transition">
              <div className="w-2 h-2 rounded-full bg-[#1f4385] mt-2"></div>
              <span>التحضير لاختبارات اللغة والقبول</span>
            </div>

          </div>

          {/* زر */}
          <Link
  to="/study-abroad"
  className="inline-flex items-center gap-2 bg-[#154734]/10 text-[#154734] px-8 py-4 rounded-xl font-medium hover:bg-[#154734]/20 transition"
>
  اكتشف المزيد
</Link>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* ===== General Services Section ===== */}
      <div className="container mx-auto bg-[#f2f9f5] px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.filter(s => s.id >= 5 && s.id <= 6).map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#154734] mb-4">{service.title}</h3>
              {service.id === 5 ? (
                <div className="grid grid-cols-3 gap-2 text-center">
                  {service.details.map((country, idx) => (
                    <div key={idx} className="bg-[#f2f9f5] py-2 rounded-lg text-sm font-medium text-[#154734] hover:bg-[#e4f3ea] transition">
                      {country}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {service.details.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Floating WhatsApp Menu ===== */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
        {whatsappOpen && whatsappNumbers.map((wp, idx) => (
          <a
            key={idx}
            href={`https://wa.me/${wp.number.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform bg-green-500 text-white font-bold"
            title={wp.label}
          >
            {wp.label}
          </a>
        ))}
        <button
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-green-500 text-white"
          onClick={() => setWhatsappOpen(!whatsappOpen)}
        >
          {whatsappOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
        
      </div>
     

    </div>
    
  );
}