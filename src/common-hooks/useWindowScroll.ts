import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onScroll() {
    setScrollY(window.scrollY);
  }

  return { scrollY };
}
