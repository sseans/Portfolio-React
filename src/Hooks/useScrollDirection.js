import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScroll, setPrevScroll] = useState(0);

  function calcScroll() {
    let scrollY = window.scrollY;

    if (scrollY === 0 || scrollY < 55) {
      setScrollDirection(null);
    } else if (scrollY > prevScroll) {
      setScrollDirection("down");
    } else if (scrollY < prevScroll) {
      setScrollDirection("up");
    }
    setPrevScroll(scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", calcScroll);
    return () => {
      window.removeEventListener("scroll", calcScroll);
    };
  });

  return scrollDirection;
}
