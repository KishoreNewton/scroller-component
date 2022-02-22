import React from "react";
import { useScroller } from "../index";

export default {
  title: "UseScroller",
};

export const UseScrollerExample = () => {
  const scroller = useScroller({ y: 300, isSmooth: true });

  return (
    <div style={{ height: 3000 }}>
      <button onClick={scroller}>Click</button>
    </div>
  );
};
