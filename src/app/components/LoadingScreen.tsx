import { motion } from "motion/react";
import { useState, useEffect } from "react";
import loader from "../pilden/icons/ezgif.com-gif-maker.gif";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div className="fixed inset-0 z-[100] bg-[#0d2b5e] flex items-center justify-center">
      <div className="text-center">

        <img
          src={loader}
          alt="loading"
          className="mx-auto mb-6 w-24"
        />

        <h1 className="text-6xl font-bold text-white">ريتال</h1>
        <p className="text-blue-100 text-xl">للخدمات التعليمية</p>

      </div>
    </motion.div>
  );
}