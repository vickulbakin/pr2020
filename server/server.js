import express from "express";
import serverRenderer from "./renderer";

const PORT = 3001;
const path = require("path");

// initialize the application and create the routes
const app = express();
const router = express.Router();

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "dist"), { maxAge: "30d" })
);

// root (/) should always serve our server rendered page
router.use("/*", serverRenderer);

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log("something bad happened - ", error);
  }

  console.log("listening on " + PORT + "...");
});
