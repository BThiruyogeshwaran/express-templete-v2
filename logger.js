import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      name: "debug-file",
      filename: "./logs/log.log",
      level: "debug",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
      json: false,
      maxsize: 104857600,
      maxFiles: 5,
    }),
    new winston.transports.File({
      name: "error-console",
      filename: "./logs/errors.log",
      level: "error",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
      json: false,
      maxsize: 104857600,
      maxFiles: 5,
    }),
  ],
});

export default logger;
