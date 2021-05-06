export default function useLockScroll() {
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  return scrollWidth;
}
