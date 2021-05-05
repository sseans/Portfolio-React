import { useState, useEffect } from "react";

export default function useLockScroll(lockStatus) {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  useEffect(() => {
    if (lockStatus === true) {
      // document.getElementsByClassName("App")[0].style.height = "100%";
      document.body.style.overflow = "hidden";
      // document.getElementById("root").style.height = "100%";
    } else if (lockStatus === false) {
      // document.getElementsByClassName("App")[0].style.height = "";
      document.body.style.overflow = "";
      // document.getElementById("root").style.height = "";
    }
  }, [lockStatus]);
}
