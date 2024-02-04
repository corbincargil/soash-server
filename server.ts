import express from "express";
import "dotenv/config";
import v1Routes from "./routes/v1/index";

const app = express();
const port = process.env.PORT;

app.use("/api/v1", v1Routes);
app.use("/api", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
