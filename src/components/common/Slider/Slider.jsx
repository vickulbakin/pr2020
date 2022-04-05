import React, {useState, useEffect, useCallback, useRef} from 'react';
import cn from 'classnames';
import {Slide} from '../Slide/Slide';
import {useSlider} from '../../../hooks/useSlider/useSlider';

import {slides} from './mock';
import s from './Slider.scss';

export const Slider = () => {
  const {sliderRef, onNextSlide, onPrevSlide} = useSlider(slides);

  return (
    <section className={s.root}>
      <div ref={sliderRef} className={s.slides}>
        {slides.map((slide, index) => (
          <Slide key={index} info={slide} />
        ))}
      </div>
      <button className={cn(s.control, s.control_prev)} onClick={() => onPrevSlide()}>{`<`}</button>
      <button className={cn(s.control, s.control_next)} onClick={() => onNextSlide()}>{`>`}</button>
    </section>
  );
};
