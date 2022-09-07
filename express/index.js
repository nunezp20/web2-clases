const express = require("express");
const rutasNoticias = require("./noticias/routes");
// Inicializar app
const app = express();
const path = require("path");
app.use("/assets", express.static(path.join(__dirname, "public")));

const middleWare = (req, res, next) => {
  console.log("pasa por aqui");
  next();
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, () => {
  console.log("app is running in port 3000");
});

app.use("/noticias", middleWare, rutasNoticias);
