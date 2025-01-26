const express = require("express");
const app = express();
const PORT = 3000;
require('dotenv').config()
const path = require('path')

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
const cors = require("cors");
app.use(cors());


//ADDED FOR SEVER RENDERING
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'build')));
}


app.use('/public', express.static(path.join(__dirname, 'public')))

const routes = require("./routes/routes");

app.use(routes);

app.get('/', (req, res) => {
    res.send({ status: 200, data: "Server running okay" });
})

const d = new Date(Date.now())
console.log(Date.now())


//ADDED FOR SEVER RENDERING
if (process.env.NODE_ENV === "production") {
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

