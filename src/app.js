import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); //For Managing JSON in request
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
); //For Managing Encoded URL's
app.use(express.static("public")); //Manage Static assets
app.use(cookieParser());

import router from "./routes/user.routes.js";

app.use("/api/v1/", router);

export { app };
