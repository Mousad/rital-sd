import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function LoadingBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
      
    }, 100); // الوقت اللي يظهر فيه الخط قبل ما يختفي

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}