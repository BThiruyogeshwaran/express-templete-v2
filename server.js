import http from "http";
import logger from "./logger.js";
import app from "./app.js";
const port = process.env.PORT || 5000;

const server = http.createServer();
server
  .on("request", app)
  .on("listening", function () {
    const addr = this.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
  })
  .on("error", function (error) {
    if (error.syscall !== "listen") throw error;
    const addr = this.address() || { port };
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    switch (error.code) {
      case "EACCES":
        logger.error(`${bind} requires elevated privileges`);
        break;
      case "EADDRINUSE":
        logger.error(`${bind} is already in use`);
        break;
      default:
        throw error;
    }
  })
  .listen(port);
