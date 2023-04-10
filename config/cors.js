import dotevn from "dotenv";
dotevn.config();

const corsOptions = {
  origin: "*",
  credentials: true,
  exposedHeaders: ["set-cookie"],
  methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
  maxAge: 172800,
  allowedHeaders: "Origin,Content-Type,Authorization,Access-Control-Allow-Methods,Content-Type",
  preflightContinue: false,
  optionSuccessStatus: 200,
};

export default corsOptions;
