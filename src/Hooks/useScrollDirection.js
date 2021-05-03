import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScroll, setPrevScroll] = useState(0);

  const app = document.getElementsByClassName("App")[0];

  let timer = null;
  function calcScroll() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      // do something
      let scrollY = app.scrollTop;

      if (scrollY === 0 || scrollY < 58) {
        setScrollDirection(null);
      } else if (scrollY > prevScroll) {
        setScrollDirection("down");
      } else if (scrollY < prevScroll) {
        setScrollDirection("up");
      }
      setPrevScroll(scrollY);
    }, 100);
  }

  useEffect(() => {
    app.addEventListener("scroll", calcScroll);
    return () => {
      app.removeEventListener("scroll", calcScroll);
    };
  });

  return scrollDirection;
}
