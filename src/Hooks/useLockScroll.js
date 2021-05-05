import { useEffect } from "react";

export default function useLockScroll(lockStatus) {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  useEffect(() => {
    if (lockStatus === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollWidth}px`;
    } else if (lockStatus === false) {
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  }, [lockStatus, scrollWidth]);
}
