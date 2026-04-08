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
      value: "+20 10 3116 0279 ",
      sub: "+20 10 3116 0279",
      color: "#0e243c",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "Ritaloffice22@gmail.com",
      sub: "Ritaloffice22@gmail.com",
      color: "#0e243c",
    },
    {
      icon: MapPin,
      label: "موقعنا",
      value: "مصر القاهرة",
      sub: "٤ محي الدين ابو العز/ الدقي",
      color: "#0e243c",
    },
   
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#f2f9f5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#0e243c" }}
          >
            تواصل معنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">دعنا نتواصل معك</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في بدء رحلتك التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#0e243c" }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          

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
                      placeholder="+20 5XX XXX XXXX"
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
                  style={{ backgroundColor: "#154734" }}
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

                <p className="text-center text-[#0e243c] text-sm mt-4">
                  سنرد على رسالتك خلال 24 ساعة عمل 
                </p>
              </form>
            )}
          </div>
          <section className="container mx-auto px-4 py-12">
  {/* العنوان */}
  <div className="text-center mb-6">
    <h2 className="text-3xl font-bold text-[#154734]">موقعنا</h2>
    <p className="text-gray-600 mt-2">
      زورنا أو تواصل معنا بسهولة من خلال موقعنا على الخريطة
    </p>
  </div>

  {/* الخريطة */}
  <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.470767706833!2d31.201623700000003!3d30.03582399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847d9cdbfb8b9%3A0x257377c4647e1126!2z2LTYsdmD2Kkg2LHZitiq2KfZhCB8INmE2YTYrtiv2YXYp9iqINin2YTYqti52YTZitmF2YrYqQ!5e1!3m2!1sar!2seg!4v1775573317335!5m2!1sar!2seg"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
        </div>
      </div>
    </section>
  );
}
