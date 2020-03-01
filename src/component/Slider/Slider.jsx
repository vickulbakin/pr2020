import React, { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";
import { Slide } from "../Slide/Slide";

import { slides } from "./mock";
import s from "./Slider.scss";

export const Slider = () => {
  const slider = useRef(null);
  const [transform, setTransform] = useState(0);

  const onNextSlide = () => {
    if (transform !== (slides.length - 1) * -100) {
      setTransform(prevTransform => prevTransform - 100);
    }
  };

  const onPrevSlide = () => {
    if (transform !== 0) {
      setTransform(prevTransform => prevTransform + 100);
    }
  };

  const onPressArrow = useCallback(
    event => {
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
    requestAnimationFrame(
      () => (slider.current.style.transform = `translateX(${transform}vw)`)
    );
  }, [transform]);

  useEffect(() => {
    window.addEventListener("keydown", onPressArrow);

    return () => window.removeEventListener("keydown", onPressArrow);
  }, [onPressArrow]);

  return (
    <section className={s.root}>
      <div ref={slider} className={s.slides}>
        {slides.map((slide, index) => (
          <Slide key={index} info={slide} />
        ))}
      </div>
      <button
        className={cn(s.control, s.control_prev)}
        onClick={() => onPrevSlide()}
      >{`<`}</button>
      <button
        className={cn(s.control, s.control_next)}
        onClick={() => onNextSlide()}
      >{`>`}</button>
    </section>
  );
};
