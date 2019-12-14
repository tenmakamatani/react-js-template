"use strict";

import express from "express";
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join("./", "dist")));

app.get("/api/test1", (req, res) => {
    res.send({ api: "test1" })
});

app.get("/api/test2", (req, res) => {
    res.send({ api: "test2" })
})

app.get("*", (req, res) => {
    res.sendFile(path.join("./", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log("server listening on PORT " + String(PORT));
});