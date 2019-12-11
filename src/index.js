const express = require("express");
const app = express();
const path = require("path");

//* Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //! con esta configuracion podemos entender datos de aplicaciones SPA
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));

//* settings
app.set("port", 3000);
let port = app.get("port");

//* strarting server
app.listen(3000, () => {
  console.log(`server on port 3000`);
});
