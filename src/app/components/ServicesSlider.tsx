import React, { useEffect, useState } from "react"


const services = [
  {
    id: 1,
    title: "الاستشارة المجانية حول الدراسة في الجامعات التركية",
    desc: "يقدم لكم كادرنا المؤلف من أكثر من ٧٠ مستشاراً تعليميّاً مؤهلاً ومدرباً أكاديميًّا جميع المعلومات التي تخص الدراسة في تركيا والجامعات التركية والوضع المعيشي فيها.",
    image: "https://api.unitededucation.com.tr/services/الاستشارة المجانية.svg",
    bgColor: "bg-blue-800 text-white",
  },
  {
    id: 2,
    title: "توجيه النصائح فيما يتعلق باختيار التخصص المناسب لك",
    desc: "بعد أن يقوم المستشار التعليمي في مؤسسة يونايتد التعليمية بالتعرف على الطالب وتحديد طلباته واهتمامه يقوم بتوجيه النصائح عن التخصصات الأنسب له.",
    image: "https://api.unitededucation.com.tr/services/توجيه الطلاب.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 3,
    title: "مساعدتك في اختيار الجامعة المناسبة لإمكانياتك وتوجهاتك",
    desc: "بعد أن يتم تحديد التخصص الأنسب للطالب حسب رغبته ونصائح فريقنا يقوم مستشارنا التعليمي بتقديم أفضل الخيارات للجامعات التي تدرس التخصصات المطلوبة.",
    image: "https://api.unitededucation.com.tr/services/مساعدتك في اختيار الجامع.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 4,
    title: "تحصيل القبولات الجامعية مجاناً",
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
    desc: "يحرص قسم الشؤون القانونية المتخصص والخبير بالقوانين التركية على تقديم طلبات الإقامة لكافة الطلاب المسجلين ويتم ترتيب ملف الإقامة بشكل كامل قبل تقديمه للجامعة أو لإدارة الهجرة",
    image: "https://api.unitededucation.com.tr/services/الاقامة-الطلابية.svg",
    bgColor: "bg-yellow-400 text-black",
  },
  {
    id: 7,
    title: "معادلة الشهادات الثانوية والجامعية",
    desc: "يتولى فريقنا معادلة الشهادات الثانوية والجامعية الصادرة من خارج تركيا ليتمكن أصحابها من مزاولة العمل داخل أراضي الجمهورية التركية وفق القوانين الرسمية",
    image: "https://api.unitededucation.com.tr/services/معادلة-الشهادة-الجامعية-01.svg",
    bgColor: "bg-blue-800 text-white",
  },
  {
    id: 8,
    title: "التأمين الصحي",
    desc: "يعتبر حصول الطالب على التأمين الصحي خلال سنوات الدراسة من الأمور المهمة والأساسية وبإمكان الطالب الحصول على التأمين الصحي من خلال التواصل مع فريقنا",
    image: "https://api.unitededucation.com.tr/services/التامين-الصحي-01.svg",
    bgColor: "bg-gray-800 text-white",
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
    id: 11,
    title: "الترجمة المحلفة",
    desc: "يقوم فريقنا بترجمة جميع الوثائق الرسمية الخاصة بالطلاب مع تصديقها عند كاتب العدل والجهات المعنية بذلك، لأنه مهما كانت لغة الشهادة فلابد من ترجمتها إلى اللغة التركية قبل تسليمها للجامعة. لذلك يتم ترجمة الوثائق بعد زيارة قسم الترجمة في مقر مؤسسة يونايتد التعليمية",
    image: "https://api.unitededucation.com.tr/services/الترجمة-المحلفة.svg",
    bgColor: "bg-gray-800 text-white",
  },
  {
    id: 12,
    title: "بطاقة الاتصال المحلية (SIM card)",
    desc: "عند الوصول إلى تركيا، يحتاج الطالب إلى الحصول على بطاقة اتصال (SIM card) وخط جوال مسجل على الشبكة التركية. يقدم فريق يونايتد الإرشاد للطلاب حول أنسب وأفضل الخطوط التركية وبأسعار معقولة في متناول الجميع",
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
  {
    id: 14,
    title: "المدارس العربية والدولية",
    desc: "تقوم يونايتد بتسجيل طلاب المدارس لكافة المناهج العربية والأجنبية في كافة المراحل والصفوف الدراسية.",
    image: "https://api.unitededucation.com.tr/services/المدارس-الدولية-01.svg",
    bgColor: "bg-gray-800 text-white",
  },
]

export default function ServicesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", direction: "rtl" },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <section className="py-2 bg-gray-50">
      <div className="text-center mb-1">
        <h2 className="text-3xl font-bold mb-2">خدماتنا</h2>
        <p className="max-w-2xl mx-auto">
          نقدم لك كل ما يسهل رحلتك <br />التعليمية في الجامعات  مع نخبة من مستشاري ريتال التعليمية.
        </p>
      </div>

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

      {/* Indicators */}
      <div className="flex justify-center items-center gap-10 mt-1">
  {/* Previous */}
  <button
    onClick={() => emblaApi?.scrollPrev()}
    className="w-7 h-7 rounded-full  hover:bg-blue-600 transition-all duration-300 text-xl font-bold"
  >
    &lt;
  </button>

  {/* Next */}
  <button
    onClick={() => emblaApi?.scrollNext()}
    className="w-7 h-7 rounded-full  hover:bg-blue-600 hover:text-white transition-all duration-300 text-xl font-bold"
  >
    &gt;
  </button>
</div>
    </section>
  )
}