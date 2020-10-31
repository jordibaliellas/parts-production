import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(3030, () => {
  // tslint:disable-next-line: no-console
  console.log("Server running in http://localhost:3030");
});
