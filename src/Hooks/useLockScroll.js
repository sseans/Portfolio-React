// import { useState, useEffect } from "react";

export default function useLockScroll(lockStatus) {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;
  function lock() {
    if (lockStatus === true) {
      console.log(`window.innerWidth`, window.innerWidth);
      console.log(`document.body.offsetWidth`, document.body.offsetWidth);
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "unset";

      //   document.body.style.height = window.innerHeight;
      //   document.body.style.paddingRight = `${scrollWidth}px`;
    } else if (lockStatus === false) {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      //   document.body.style.height = "100%";
      //   document.body.style.paddingRight = "0px";
    }
  }

  return lock;
}
