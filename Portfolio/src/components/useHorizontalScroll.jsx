import { useRef } from "react";

export function useHorizontalScroll(amount = 150) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return { scrollRef, scroll };
}