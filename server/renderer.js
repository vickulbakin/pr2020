import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import { App } from "../src/App";

const path = require("path");
const fs = require("fs");

export default (req, res) => {
  const filePath = path.resolve(__dirname, "..", "dist", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    // render the app as a string
    const html = renderToString(
      <StaticRouter location={req.baseUrl}>
        <App />
      </StaticRouter>
    );

    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
