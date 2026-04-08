import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],

};

export function Footer() {
  return (

<footer className="bg-[#0d2b5e] text-white pt-8 pb-6">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">

    {/* about */}
    <div className="space-y-4 text-center md:text-right">
      <h1>Rital</h1>
      {/* newsletter */}
    <div className="text-center md:text-right space-y-4">

     

      <form className="flex bg-white rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="flex-1 p-3 text-black outline-none"
        />

        <button className="bg-[#154734] px-4 text-white">
          إرسال
        </button>
      </form>

      <p className="text-gray-300 text-sm">
        اشترك لتبقى على اطلاع دائم بعروضنا المميزة
      </p>

    </div>


      <p className="text-gray-300 text-sm pt-6 leading-relaxed">
        تعتبر Rital التعليمية شركة رائدة في مجال الخدمات الأكاديمية
        لمساعدة الطلاب العرب في الدراسة بالجامعات المتميزة.
      </p>

      <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
        <li><a href="#">الجامعات</a></li>
        <li><a href="#">المدارس الدولية</a></li>
        <li><a href="#">المدونة</a></li>
        <li><a href="#">الاستوديو</a></li>
        <li><a href="#">انضم إلينا</a></li>
      </ul>
    </div>


    {/* links */}
    <div className="text-center md:text-right">
      <h3 className="text-lg font-semibold mb-6">روابط مهمة</h3>

      <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">

        <a href="#">الدراسة في مصر</a>
        <a href="#">اللغة العربية</a>

        <a href="#">السكن الطلابي</a>
        <a href="#">الخدمات</a>

        <a href="#">تواصل معنا</a>
        <a href="#">من نحن</a>

        <a href="#">أهم التخصصات</a>
        <a href="#">المنح الدراسية</a>

      </div>
    </div>


   

  </div>


  {/* bottom */}
  <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
    © {new Date().getFullYear()} Rital — جميع الحقوق محفوظة
  </div>
</footer>
    
  );
}
