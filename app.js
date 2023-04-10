import express from "express";
import cors from "cors";
import corsOptions from "./config/cors.js";
import Router from "./routes/router.js";
import logger from "./logger.js";
import expressWinston from "express-winston";
import morgan from "morgan";

const api = express();

api.use(morgan("[:method] :status :url HTTP/:http-version :response-time ms"));

api.use(
  expressWinston.logger({
    winstonInstance: logger,
    msg: "{{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms",
    meta: false,
  })
);

api.use((req, res, next) => {
  req.base = `${req.protocol}://${req.get("host")}`;
  req.logger = logger;
  return next();
});

api.use((error, req, res, next) => {
  logger.error(error, error);
  res.status(error.status || 500).json({ error });
});

api.use(cors(corsOptions));

api.use(express.json());

api.use(express.urlencoded({ extended: true }));

api.use("/api", Router);

api.use(express.static("public"));

export default api;
