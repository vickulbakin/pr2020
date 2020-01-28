import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { Slide } from "../Slide/Slide";

import { slides } from "./mock";
import s from "./Slider.css";

export const Slider = () => {
  const [transform, setTransform] = useState(0);
  console.log("123");

  const onNextSlide = () => {
    transform === (slides.length - 1) * -100
        ? false
        : setTransform(prevTransform => prevTransform - 100)
  };

  const onPrevSlide = () => {
    transform === 0
        ? false
        : setTransform(prevTransform => prevTransform + 100)
  };

  const onPressArrow = useCallback(
    event => {
      if (event.code === "ArrowRight") {
        onNextSlide();
      } else if (event.code === "ArrowLeft") {
        onPrevSlide();
      } else {
        return false;
      }
    },
    [onNextSlide, onPrevSlide]
  );

  useEffect(() => {
    window.addEventListener("keydown", onPressArrow);

    return () =>
      window.removeEventListener("keydown", onPressArrow);
  }, [onPressArrow]);

  return (
    <section className={s.root}>
      <div
        className={s.slides}
        style={{ transform: `translateX(${transform}vw)` }}
      >
        {slides.map(slide => (
          <Slide key={slide.title} info={slide} />
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
