import path from 'path';
import express from 'express';
const app = express();

//module.exports =function (PROD) {
//    const port = PROD ? 3000 : PROD;
//    const opts = { redirect: true };
//    const hostname = PROD ? '127.0.0.1' : "localhost";
//    app.use("/", express.static("build", opts));
//    app.all("*", (req, res) => res.sendFile(__dirname + "/build/index.html"));
//    app.listen(port, () => {
//        console.log("INFO: " + "express server started", new Date());
//        console.log("INFO: " + `Server is at http://${hostname}:${port}`);
//    });
//};
var PROD=3000;
const port = PROD ? 3000 : PROD;
const opts = { redirect: true };
const hostname = PROD ? '127.0.0.1' : "localhost";
app.use("/", express.static("src", opts));
app.all("*", (req, res) => res.sendFile(__dirname + "/src/index.html"));
app.listen(port, () => {
    console.log("INFO: " + "express server started", new Date());
    console.log("INFO: " + `Server is at http://${hostname}:${port}`);
});
