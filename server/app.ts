import express from "express";
const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (_req, res) => {
  res.send("Hello type");
});
