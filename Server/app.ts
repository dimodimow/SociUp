import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env["APP_PORT"], () => console.log("Server is running."));
