const express = require("express");
const app = express();
const PORT = 3000;
require('dotenv').config()
const path = require('path')
// const mongoose = require("mongoose")

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
const cors = require("cors");
app.use(cors());


//ADDED FOR SEVER RENDERING
if (process.env.ENV_MODE === "production") {
    app.use(express.static(path.join(__dirname, 'build')));
}


app.use('/public', express.static(path.join(__dirname, 'public')))

const routes = require("./routes/routes");
// const { authorization, authorization_success } = require("./lib/auth");
// const { prismaMain } = require("./prismaMain");
// const { readRequests } = require("./lib/requests");
// const { retrieveSessionSSL } = require("./lib/payment/sslcommerz");
// const { retrieveSession } = require("./lib/payment/stripe");

app.use(routes);

app.get('/', (req, res) => {
    res.send({ status: 200, data: "Server running okay" });
})

// prismaMain()
// retrieveSession()
// retrieveSessionSSL()
const d = new Date(Date.now())
console.log(Date.now())
// console.log(`${d.getDay()+1}-${d.getMonth()+1}-${d.getFullYear()}`)
// readRequests()


//ADDED FOR SEVER RENDERING
if (process.env.ENV_MODE === "production") {
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

// mongoose.connect("mongodb://localhost/lighthouse").then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// }).catch((error) => {
//     console.log(`Database connection error ${error}`)
// })

