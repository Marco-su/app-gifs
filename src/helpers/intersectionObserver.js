import { useEffect, useState } from "react";

export const IsIntersecting = (elementRef, isReadyToObserve) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onChange = (entries, observer) => {
    const element = entries[0];
    element.isIntersecting ? setIsIntersecting(true) : setIsIntersecting(false);
  };

  useEffect(() => {
    if (elementRef && isReadyToObserve) {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: "0px",
      });
      observer.observe(elementRef.current);
    }
  }, [elementRef, isReadyToObserve]);

  return isIntersecting;
};
