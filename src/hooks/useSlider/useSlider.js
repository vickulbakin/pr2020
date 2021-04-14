import { useRef, useState, useEffect, useCallback } from "react";

export const useSlider = (slides) => {
  const sliderRef = useRef(null);
  const [transformSlider, setTransformSlider] = useState(0);

  const onNextSlide = () => {
    if (transformSlider !== (slides.length - 1) * -100) {
      setTransformSlider((prevTransform) => prevTransform - 100);
    }
  };

  const onPrevSlide = () => {
    if (transformSlider !== 0) {
      setTransformSlider((prevTransform) => prevTransform + 100);
    }
  };

  const onPressArrow = useCallback(
    (event) => {
      if (event.code === "ArrowRight") {
        onNextSlide();
      }

      if (event.code === "ArrowLeft") {
        onPrevSlide();
      }
    },
    [onNextSlide, onPrevSlide]
  );

  useEffect(() => {
    const rafId = requestAnimationFrame(
      () =>
        (sliderRef.current.style.transform = `translateX(${transformSlider}vw)`)
    );

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [transformSlider]);

  useEffect(() => {
    window.addEventListener("keydown", onPressArrow);

    return () => window.removeEventListener("keydown", onPressArrow);
  }, [onPressArrow]);

  return {
    sliderRef,
    onNextSlide,
    onPrevSlide,
  };
};
