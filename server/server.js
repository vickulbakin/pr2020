import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import { Main } from "../src/pages/Main/Main";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res) => {
  fs.readFile(
    path.resolve("./src/index.html"), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Some error happend");
      }
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<Main />)}</div>`
        )
      );
    }
  );
});

// app.use(express.static(path.resolve(__dirname, "./src/styles")));

app.listen(PORT, () => {
  console.log(`App lounched on ${PORT}`);
});
