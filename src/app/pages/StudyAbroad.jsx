import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function StudyAbroad() {
  return (
    <div className="container mx-auto -to-20">

      <h1 className="text-4xl font-bold text-[#154734] mb-6">
       
      </h1>

  
    <div className="font-tajawal">

      {/* الهيدر */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#154734]/10 border border-[#154734]/20 mb-8">
            <span className="text-sm text-[#154734] font-medium">
              التقديم للجامعات المصرية
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#154734]">
            مستقبلك الأكاديمي في مصر
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            نساعدك على اختيار الكلية المناسبة والتقديم للجامعات الحكومية
            والخاصة من خلال خدماتنا المتكاملة
          </p>

        </div>
      </section>

      {/* الخدمات */}
      <section className="py-9">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#154734] mb-6">
              خدماتنا المتكاملة
            </h2>

            <p className="text-lg text-gray-600">
              دعم شامل لضمان نجاح تقديمك للجامعات المصرية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border hover:shadow-lg">
              تقديم معلومات تفصيلية عن الكليات والتخصصات
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg">
              تقييم شامل للقدرات والمعدل
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg">
              المساعدة في تجهيز المستندات المطلوبة
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg">
              توفير دورات تحضيرية لاختبارات القدرات
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg">
              توجيه شامل بعد القبول
            </div>

            <div className="p-6 rounded-xl border hover:shadow-lg">
              المساعدة في إجراءات الكشف الطبي والتنسيق
            </div>

          </div>
        </div>
      </section>

      {/* أنواع الجامعات */}
      <section className="py-7 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#154734] mb-6">
              أنواع الجامعات المتاحة
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 border text-center hover:shadow-lg">
              <h3 className="text-2xl font-bold text-[#154734] mb-4">
                الجامعات الحكومية
              </h3>

              <p className="text-gray-600">
                جامعة القاهرة، عين شمس، الإسكندرية وأكثر من 25 جامعة حكومية
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center hover:shadow-lg">
              <h3 className="text-2xl font-bold text-[#154734] mb-4">
                الجامعات الخاصة
              </h3>

              <p className="text-gray-600">
                الجامعة الأمريكية، الألمانية، البريطانية وأكثر من 30 جامعة
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center hover:shadow-lg">
              <h3 className="text-2xl font-bold text-[#154734] mb-4">
                الجامعات التكنولوجية
              </h3>

              <p className="text-gray-600">
                جامعات متخصصة في التكنولوجيا والعلوم التطبيقية الحديثة
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-[#154734] mb-6">
            ابدأ رحلتك الجامعية في مصر
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            احصل على استشارة مجانية لاختيار الجامعة والتخصص المناسب
          </p>

          <a
            href="/consultation"
            className="bg-[#154734] text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
          >
            احجز استشارة مجانية
          </a>

        </div>
      </section>

    </div>
  
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