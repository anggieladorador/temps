const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const router = require("./routes/index");
console.log(__dirname);

router(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server initialized on port ${port}`);
});
//static files
app.use(express.static(path.join(__dirname, "/public")));

//hbs
app.set("view engine", "hbs");
//registro de parciales
hbs.registerPartials(path.join(__dirname, "/views/partials"));
