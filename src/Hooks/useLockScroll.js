// import { useState, useEffect } from "react";

export default function useLockScroll(lockStatus, appRef) {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  //   document.getElementsByClassName("App")[0].

  function lock() {
    if (lockStatus === true) {
      //   document.body.style.overflowY = "hidden";
      //   document.body.style.paddingRight = `${scrollWidth}px`;
      document.getElementsByClassName("App")[0].style.overflowY = "hidden";
      //   document.body.style.overflowY = "hidden";
    } else if (lockStatus === false) {
      //   document.body.style.overflowY = "unset";
      document.getElementsByClassName("App")[0].style.overflowY = "unset";
      //   document.body.style.overflowY = "unset";
      //   document.body.style.paddingRight = "0px";
    }
  }

  return lock;
}
