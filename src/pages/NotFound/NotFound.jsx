import React from "react";

import { Container } from "../../components/Container/Container";

import s from "./NotFound.scss";

export const NotFound = () => (
  <Container>
    <div className={s.root}>
      <h1>Страница не найдена</h1>
    </div>
  </Container>
);
