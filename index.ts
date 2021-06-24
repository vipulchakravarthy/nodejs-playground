//import the express library
const express = require('express');
//create app object
const app = express();


//write your api's

app.get("/hello", (req, res) => {
    res.send({ "name": "vipul" });
})

app.listen(5000, () => {
    console.log("server listening on port 5000");
})
