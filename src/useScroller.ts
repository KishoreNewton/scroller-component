export function useScroller({
  x,
  y,
  isSmooth = false,
}: {
  x: number;
  y: number;
  isSmooth?: boolean;
}) {
  if (!window) return;

  return function scroller() {
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? "smooth" : "auto",
    });
  };
}
