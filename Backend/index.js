const express = require("express")
const cors = require("cors");
const connection = require("./database/db");
const app = express();



app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("uygulama ayakta ve 5000 portuna istek bekliyor"))


connection();