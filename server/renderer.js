import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

// import our main App component
import { App } from "../src/App";
import { Main } from "../src/pages/Main/Main";

const path = require("path");
const fs = require("fs");

export default (req, res) => {
  // point to the html file created by CRA's build tool
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
    // const html = renderToString(<Main />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
