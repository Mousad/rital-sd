import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* زر فتح البوت */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "10px",
          background: "#0d2b5e",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          fontSize: "25px",
        }}
      >
        🤖
      </div>

      {/* نافذة البوت */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "10px",
            width: "240px",
            background: "#f2f9f5",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>  مرحباً بك في ريتال</h3>

          <p style={{ fontSize: "14px", marginBottom: "15px" }}>
            كيف يمكنني مساعدتك؟
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            
            <Link to="/services/scholarships" className="text-[#22275f]">
               التقديم على المنح
            </Link>

            <Link to="/services/Courses" className="text-[#22275f]">
               التسجيل في الكورسات
            </Link>

            <Link to="/services/CertificateServices" className="text-[#22275f]">
               استخراج الشهادات
            </Link>

            <Link to="/services/Consultation" className="text-[#22275f]">
               الاستشارات التعليمية
            </Link>

            <a
              href="https://api.whatsapp.com/send/?phone=905315016019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22275f]"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="text-[#00c950]" />
               التواصل  
               
            </a>

          </div>
        </div>
      )}
    </>
  );
}