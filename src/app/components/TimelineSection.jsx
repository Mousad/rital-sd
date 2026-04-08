import React from "react";

const timelineEvents = [
  { year: "2024", description: "Published over 25,000 research papers covering fields such as engineering, medicine, and AI." },
  { year: "2023", description: "Expanded to 10 new countries and partnered with top universities worldwide." },
  { year: "2022", description: "Launched online learning platform and virtual classrooms for students globally." },
  { year: "2021", description: "Achieved 5,000+ graduates successfully enrolled in their dream programs." },
  { year: "2020", description: "Started community projects and scholarship programs in multiple countries." },
];

export default function InfiniteTimeline() {
  // نكرر البطاقات 4 مرات عشان تغطي كل العرض
  const repeatedEvents = [...timelineEvents, ...timelineEvents, ...timelineEvents, ...timelineEvents];

  return (
    <section className="py-16 bg-[#f2f9f5] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#0d2b5e] text-center">
        تاريخنا وأهم الإنجازات
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        على مدار السنوات الماضية ساهمنا في تطوير التعليم والبحث العلمي في مصر والعالم من خلال مشاريعنا ومبادراتنا المتعددة.
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {repeatedEvents.map((event, index) => (
            <div key={index} className="flex-none w-[250px] md:w-[300px] lg:w-[350px] px-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full border border-blue-900 bg-gray-100 relative">
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="h-[1px] grow bg-gray-400 ml-2"></div>
                </div>
                <h4 className="text-blue-500 font-semibold text-xl">{event.year}</h4>
                <p className="text-gray-800 mt-2 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* تحريك نصف المحتوى عشان يكون سلس */
        }
        .animate-scroll {
          display: flex;
          gap: 12px;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}