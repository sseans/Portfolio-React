import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScroll, setPrevScroll] = useState(0);

  const app = document.getElementsByClassName("App")[0];

  function calcScroll() {
    let scrollY = app.scrollTop;

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
    app.addEventListener("scroll", calcScroll);
    return () => {
      app.removeEventListener("scroll", calcScroll);
    };
  });

  return scrollDirection;
}
