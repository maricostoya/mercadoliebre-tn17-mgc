const express = require("express");
const path = require("path");
const app = express();
const PORT= process.env.PORT || 3000



app.use(express.static("public"));


app.listen(PORT, () => {
  console.log("Servidor Corriendo");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/view/home.html');
});



app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/view/registro.html')
})


app.get('/login', (req, res) => {
res.sendFile(__dirname + '/view/login.html')
})