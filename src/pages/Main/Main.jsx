import React from "react";

import { Container } from "../../components/Container/Container";
import { Slider } from "../../component/Slider/Slider";

import s from "./Main.scss";

export const Main = () => (
  <Container>
    <div className={s.root}>
      <Slider />
    </div>
  </Container>
);
