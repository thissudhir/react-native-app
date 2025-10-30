import express from "express";
// import router from "./routes/index.ts";
import timeStamp from "./utils/timestamp.ts";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send(
    `The server is healthy & running fine at ${timeStamp} on port ${process.env.PORT}`
  );
});

app.use((req, res, next) => {
  console.log(`${timeStamp} - ${req.method} ${req.path}`);
  next();
});

// app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log("<-------------------------->");
  console.log(" dev is running on port " + process.env.PORT);
  console.log("<-------------------------->");
});
