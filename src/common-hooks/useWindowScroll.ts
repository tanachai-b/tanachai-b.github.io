import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onScroll() {
    setScroll(window.scrollY);
  }

  return { scroll };
}
