import React, { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const services = [
  {
    id: 1,
    title: "الاستشارة المجانية     ",
    desc: "يقدم لكم كادرنا المؤلف من أكثر من ٧٠ مستشاراً تعليميّاً مؤهلاً ومدرباً أكاديميًّا جميع المعلومات التي تخص الدراسة في تركيا والجامعات التركية والوضع المعيشي فيها.",
    image: "https://api.unitededucation.com.tr/services/الاستشارة المجانية.svg",
    bgColor: "bg-[#154734] text-white",
  },
 
  {
    id: 3,
    title: "مساعدتك في اختيار الجامعة   ",
    desc: "بعد أن يتم تحديد التخصص الأنسب للطالب حسب رغبته ونصائح فريقنا يقوم مستشارنا التعليمي بتقديم أفضل الخيارات للجامعات التي تدرس التخصصات .",
    image: "https://api.unitededucation.com.tr/services/مساعدتك في اختيار الجامع.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 4,
    title: "تحصيل القبولات الجامعية ",
    desc: "بعد تحديد الجامعات والتخصصات ما على الطالب إلا أن يرسل إلينا صور الوثائق المطلوبة للتقديم ونحن نقوم بجميع الإجراءات لنحصل له على القبول في الجامعة المناسبة له مجاناً",
    image: "https://api.unitededucation.com.tr/services/قبول-جامعي.svg",
    bgColor: "bg-blue-800 text-white",
  },
  {
    id: 5,
    title: "تأمين السكنات الطلابية",
    desc: "يقوم فريقنا المتخصص في شؤون السكن بالتواصل مع طلابنا المقبولين في الجامعات لاقتراح السكنات الطلابية وإتمام عملية حجز السكن قبل قدوم الطالب.",
    image: "https://api.unitededucation.com.tr/services/سكن-جامعي.svg",
    bgColor: "bg-gray-800 text-white",
  },
  {
    id: 6,
    title: "الإقامة الطلابية",
    desc: "يحرص قسم الشؤون القانونية المتخصص والخبير بالقوانين التركية على تقديم طلبات الإقامة لكافة الطلاب المسجلين ويتم ترتيب ملف الإقامة بشكل كامل      ",
    image: "https://api.unitededucation.com.tr/services/الاقامة-الطلابية.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  
 
  {
    id: 8,
    title: "التأمين الصحي",
    desc: "يعتبر حصول الطالب على التأمين الصحي خلال سنوات الدراسة من الأمور المهمة والأساسية وبإمكان الطالب الحصول على التأمين الصحي من خلال التواصل مع فريقنا",
    image: "https://api.unitededucation.com.tr/services/التامين-الصحي-01.svg",
    bgColor: "bg-[#154734] text-white",
  },
  {
    id: 9,
    title: "إنشاء حسابات بنكية للطلاب",
    desc: "بعد إتمام التسجيل النهائي في الجامعة يقوم فريقنا بمساعدة الطالب لإنشاء حساب بنكي خاص به وفق احتياجاته الأساسية",
    image: "https://api.unitededucation.com.tr/services/حسابات-بنكية.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 10,
    title: "بطاقة المواصلات العامة",
    desc: "يقوم فريقنا باستخراج بطاقة المواصلات وتسليمها للطالب ويتم كذلك تسليمه خريطة بالمواصلات العامة وطرق استخدامها",
    image: "https://api.unitededucation.com.tr/services/بطاقة-اتصال-محلية.svg",
    bgColor: "bg-blue-800 text-white",
  },
  
  {
    id: 12,
    title: "بطاقة الاتصال المحلية ",
    desc: "عند الوصول إلى تركيا، يحتاج الطالب إلى الحصول على بطاقة اتصال (SIM card) وخط جوال مسجل على الشبكة  الإرشاد للطلاب حول     وبأسعار معقولة في متناول الجميع",
    image: "https://api.unitededucation.com.tr/services/بطاقة-اتصال-محلية.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 13,
    title: "خدمات النقل والاستقبال",
    desc: "مؤسسة يونايتد التعليمية تتواجد في المطار لاستقبال الطلاب القادمين إلى تركيا. وهناك فريق متخصص يقوم بمرافقتك إلى الجامعة لإكمال إجراءات التسجيل النهائي فيها",
    image: "https://api.unitededucation.com.tr/services/خدمة-النقل-والاستقبال-01.svg",
    bgColor: "bg-blue-800 text-white",
  },
 
]

export default function AboutSection() {
  return (
    <section className="py-2 bg-gray-5 bg-[#f2f9f5]">
     
<ServicesCarousel />

      
    </section>
  )
}

function ServicesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", direction: "rtl" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap())
    )
  }, [emblaApi])

  return (
    
    <section className="py- bg-[#f2f9f5]">

      

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => (
            <div key={service.id} className="flex-[0_0_89%] sm:flex-[0_0_70%] lg:flex-[0_0_60%] px-5">
              <div
                className={`rounded-3xl p-6 shadow-xl transition-all duration-500 ${
                  index === selectedIndex ? "scale-100 opacity-100" : "scale-95 opacity-60"
                } ${service.bgColor}`}
              >
                <div className="flex justify-center mb-4">
                  <img src={service.image} alt={service.title} className="w-28 h-28" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}