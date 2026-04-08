import { useState, useEffect, useRef } from "react";
import { Users, Award, UserCheck, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 15000,
    suffix: "+",
    label: "القبول",
   
    color: "#0d2b5e",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    label: " خبرة", 
    color: "#0d2b5e",
  },
  {
    icon: UserCheck,
    number: 85,
    suffix: "+",
    label: "استشارات ",
    color: "#0d2b5e",
  },
  {
    icon: Building2,
    number: 150,
    suffix: "+",
    label: "جامعة ",
    color: "#0d2b5e",
  },
];

function useCounter(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.number, 2000, inView);
  const Icon = stat.icon;

  return (
    <div
      className="flex flex-col items-center text-center p-3 rounded-3xl bg-[#f2f9f5] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{
        border: "1px solid #f2f9f5",
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}30)` }}
      >
        <Icon size={26} style={{ color: stat.color }} strokeWidth={1} />
      </div>
      <div
        className="text-2xl font-black mb-2"
        style={{ color: stat.color, fontFamily: "Cairo, sans-serif" }}
      >
       {count.toLocaleString("en-US")}{stat.suffix}
      </div>
      <h3 className="text-gray-800 font-bold text-xl mb-2">{stat.label}</h3>
      {/* <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p> */}
    </div>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
  <section ref={ref} className="py-10 px-4" style={{ backgroundColor: "#f2f9f5" }}>
  <div className="max-w-3xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-black text-[#0d2b5e] mb-2">
        شركاؤك في النجاح
      </h2>
      <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
        على مدار أكثر من عقد من الزمان، نجحنا في مساعدة الآلاف من الطلاب على تحقيق أحلامهم الأكاديمية
      </p>
      <div className="w-16 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: "#0d2b5e" }} />
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} inView={inView} />
      ))}
    </div>
  </div>
</section>
  );
}
