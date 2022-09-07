const express = require("express");
const rutasNoticias = require("./noticias/routes");
const { engine } = require("express-handlebars");

// Inicializar app
const app = express();
const path = require("path");

//registrar engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use("/assets", express.static(path.join(__dirname, "public")));

const middleWare = (req, res, next) => {
  console.log("pasa por aqui");
  next();
};

app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "/index.html"));
  res.render("index", {
    title: "Prueba desde index.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  });
});

app.listen(3000, () => {
  console.log("app is running in port 3000");
});

app.use("/noticias", middleWare, rutasNoticias);
