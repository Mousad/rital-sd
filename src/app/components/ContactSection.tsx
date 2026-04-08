import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "اتصل بنا",
      value: "+90 123 456 7890",
      sub: "+90 987 654 3210",
      color: "#0d2b5e",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@ratal-edu.com",
      sub: "support@ratal-edu.com",
      color: "#c0392b",
    },
    {
      icon: MapPin,
      label: "موقعنا",
      value: "إسطنبول، تركيا",
      sub: "Beyoglu, Istanbul 34433",
      color: "#0d2b5e",
    },
    {
      icon: MessageSquare,
      label: "واتساب",
      value: "+90 555 123 4567",
      sub: "متاح 24/7",
      color: "#27ae60",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
          >
            تواصل معنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">دعنا نتواصل معك</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl hover:shadow-md transition-all duration-200"
                  style={{ border: "1.5px solid #e8ecf0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}30)` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="font-bold text-gray-900">{item.value}</p>
                    <p className="text-gray-500 text-sm">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "#0d2b5e", border: "1px solid #0d2b5e" }}
            >
              <p className="text-white font-bold mb-4">تابعنا على وسائل التواصل</p>
              <div className="flex gap-3">
                {[
                  { label: "فيسبوك", emoji: "📘" },
                  { label: "إنستغرام", emoji: "📷" },
                  { label: "يوتيوب", emoji: "📺" },
                  { label: "تيك توك", emoji: "🎵" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    title={s.label}
                  >
                    {s.emoji}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center py-16 rounded-3xl text-center"
                style={{ backgroundColor: "#f0f8f0", border: "2px dashed #27ae60" }}
              >
                <CheckCircle size={72} className="text-green-500 mb-5" />
                <h3 className="text-2xl font-black text-gray-900 mb-3">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-gray-600 max-w-sm leading-relaxed">
                  شكراً لتواصلك مع منصة رتال التعليمية. سيتواصل معك أحد مستشارينا خلال 24 ساعة.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#27ae60" }}
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl shadow-lg"
                style={{ border: "1.5px solid #e8ecf0", backgroundColor: "#fafbff" }}
              >
                <h3 className="font-black text-2xl text-gray-900 mb-7">أرسل لنا رسالة</h3>

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">الاسم الأول *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الأول"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{
                        border: "1.5px solid #e0e0e0",
                        backgroundColor: "white",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d2b5e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">الاسم الأخير *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الأخير"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d2b5e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>
                </div>

                {/* Gender & Country Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">الجنس *</label>
                    <select
                      required
                      value={form.gender}
                      onChange={(e) => setForm({ ...form, gender: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                      style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                    >
                      <option value="">اختر الجنس</option>
                      <option value="male">ذكر</option>
                      <option value="female">أنثى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">الدولة *</label>
                    <select
                      required
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                      style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                    >
                      <option value="">اختر دولتك</option>
                      <option value="sa">المملكة العربية السعودية</option>
                      <option value="jo">الأردن</option>
                      <option value="eg">مصر</option>
                      <option value="ma">المغرب</option>
                      <option value="dz">الجزائر</option>
                      <option value="tn">تونس</option>
                      <option value="ly">ليبيا</option>
                      <option value="iq">العراق</option>
                      <option value="sy">سوريا</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                      style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d2b5e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      placeholder="+966 5XX XXX XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                      style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                      onFocus={(e) => (e.target.style.borderColor = "#0d2b5e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">رسالتك *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="اكتب رسالتك هنا... (التخصص المطلوب، الجامعة، أسئلتك...)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl outline-none text-sm resize-none"
                    style={{ border: "1.5px solid #e0e0e0", backgroundColor: "white" }}
                    onFocus={(e) => (e.target.style.borderColor = "#0d2b5e")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70"
                  style={{ backgroundColor: "#0d2b5e" }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      إرسال الرسالة
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-sm mt-4">
                  سنرد على رسالتك خلال 24 ساعة عمل ✉️
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
