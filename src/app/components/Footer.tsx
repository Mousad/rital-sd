import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";

const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],
  "خدماتنا": [
    { label: "استشارات مجانية", href: "#" },
    { label: "التوجيه الأكاديمي", href: "#" },
    { label: "المساعدة في القبول", href: "#" },
    { label: "دعم السكن", href: "#" },
    { label: "تصاريح الإقامة", href: "#" },
    { label: "ترجمة المستندات", href: "#" },
  ],
  "الجامعات": [
    { label: "جامعة إسطنبول", href: "#" },
    { label: "جامعة أنقرة", href: "#" },
    { label: "جامعة بيلكنت", href: "#" },
    { label: "جامعة بوغازيتشي", href: "#" },
    { label: "جامعة حاجتبه", href: "#" },
    { label: "عرض جميع الجامعات", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1f4e" }}>
      {/* Newsletter Banner */}
      <div
        className="py-12 px-4"
        style={{ backgroundColor: "#0d2b5e", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">اشترك في نشرتنا البريدية</h3>
            <p className="text-blue-300">احصل على آخر أخبار المنح والجامعات مباشرة على بريدك</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 md:w-72 px-5 py-3 rounded-xl text-sm outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
            />
            <button
              className="px-6 py-3 rounded-xl text-white font-bold text-sm flex items-center gap-2 transition-all hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#c0392b" }}
            >
              اشترك الآن
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1e5799, #0d2b5e)" }}
                >
                  <span className="text-white text-2xl font-black">ر</span>
                </div>
                <div>
                  <p className="text-white font-black text-xl">منصة رتال التعليمية</p>
                  <p className="text-blue-400 text-xs">Ratal Education Platform</p>
                </div>
              </div>

              <p className="text-blue-200 leading-relaxed mb-7 max-w-sm">
                منصتك الموثوقة للوصول إلى أفضل الجامعات التركية والعالمية. نساعدك في تحقيق
                حلمك التعليمي بخدمة متكاملة من الاستشارة حتى الوصول.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+90 123 456 7890" },
                  { icon: Mail, text: "info@ratal-edu.com" },
                  { icon: MapPin, text: "Beyoglu, Istanbul, Turkey" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-blue-200 text-sm">
                      <Icon size={16} className="text-blue-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-7">
                {[
                  { label: "فيسبوك", emoji: "📘", color: "#1877f2" },
                  { label: "إنستغرام", emoji: "📷", color: "#e4405f" },
                  { label: "يوتيوب", emoji: "📺", color: "#ff0000" },
                  { label: "واتساب", emoji: "💬", color: "#25d366" },
                  { label: "تيك توك", emoji: "🎵", color: "#010101" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                    title={s.label}
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-black mb-5 text-lg relative">
                  {title}
                  <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: "#c0392b" }} />
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <ArrowLeft
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 flex-shrink-0"
                        />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-5 px-4 text-center"
        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm flex items-center gap-2">
            <span>© 2025 منصة رتال التعليمية. جميع الحقوق محفوظة.</span>
          </p>
          <p className="text-blue-400 text-sm flex items-center gap-1">
            صُنع بـ <Heart size={14} className="text-red-400" fill="currentColor" /> لكل طالب عربي طموح
          </p>
          <div className="flex gap-5 text-sm text-blue-300">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
