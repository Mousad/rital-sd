import { Video, Clock, Users, CheckCircle } from "lucide-react";

const benefits = [
  "استشارة شخصية مع مستشار أكاديمي متخصص",
  "تقييم مؤهلاتك وتحديد الخيارات المناسبة",
  "معلومات دقيقة عن الجامعات والمنح المتاحة",
  "خطة واضحة للخطوات التالية في رحلتك",
];

export function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d2b5e 0%, #1e5799 50%, #0d2b5e 100%)" }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translate(-30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #c0392b, transparent)", transform: "translate(30%, 30%)" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translateY(-50%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-right">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "rgba(192,57,43,0.3)", color: "#ff9f8f", border: "1px solid rgba(192,57,43,0.5)" }}
            >
              <Video size={16} />
              <span>استشارة مجانية عبر الفيديو</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              احجز استشارتك
              <br />
              <span style={{ color: "#ffd700" }}>بمكالمة فيديو الآن!</span>
            </h2>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
              تحدث مع أحد مستشارينا الأكاديميين المتخصصين واحصل على خارطة طريق واضحة
              لبدء مسيرتك التعليمية في أفضل الجامعات العالمية
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: "#ffd700", flexShrink: 0 }} />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-blue-200">
                <Clock size={18} />
                <span className="text-sm">مدة الاستشارة: 30-45 دقيقة</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Users size={18} />
                <span className="text-sm">+5000 استشارة ناجحة</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-lg transition-all hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: "#c0392b", color: "white" }}
              >
                <Video size={22} />
                احجز موعدك الآن
              </a>
              <a
                href="https://wa.me/905001234567"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                💬 واتساب
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-shrink-0 w-full lg:w-96">
            <div
              className="p-8 rounded-3xl text-center relative"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {/* Video Icon */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                style={{ background: "linear-gradient(135deg, #c0392b, #e74c3c)" }}
              >
                <Video size={48} className="text-white" />
                {/* Pulse rings */}
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: "rgba(192,57,43,0.3)", animationDuration: "2s" }}
                />
              </div>

              <h3 className="text-white text-2xl font-black mb-2">استشارة مجانية 100%</h3>
              <p className="text-blue-200 mb-6 text-sm leading-relaxed">
                لا توجد رسوم خفية. مستشارونا في خدمتك لمساعدتك على اتخاذ القرار الصحيح
              </p>

              {/* Steps */}
              <div className="space-y-4 text-right">
                {["سجّل بياناتك في النموذج", "حدد موعداً يناسبك", "تحدث مع مستشارك المخصص"].map(
                  (step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                        style={{ backgroundColor: "#c0392b" }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-blue-100 text-sm">{step}</span>
                    </div>
                  )
                )}
              </div>

              {/* Trust Signal */}
              <div
                className="mt-6 pt-6 flex items-center justify-center gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex -space-x-2">
                  {["#c0392b", "#0d2b5e", "#27ae60", "#f39c12"].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: c }}
                    >
                      {["أ", "م", "ف", "خ"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-blue-200 text-sm">
                  انضم لـ<span className="text-yellow-300 font-bold">+5000</span> طالب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
