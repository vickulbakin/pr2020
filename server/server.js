import express from "express";
import serverRenderer from "./renderer";

const PORT = 3001;
const path = require("path");

const app = express();
const router = express.Router();

router.use(
  express.static(path.resolve(__dirname, "..", "dist"), { maxAge: "30d" })
);

router.use("/*", serverRenderer);

app.use(router);

app.listen(PORT, error => {
  if (error) {
    return console.log("something bad happened - ", error);
  }

  console.log("listening on " + PORT + "...");
});
