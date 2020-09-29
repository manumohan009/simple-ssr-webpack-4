import express from "express";
import React from "react";

import Loadable from 'react-loadable';

import renderer from './helpers/renderer'

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    const content = renderer(req);
    res.send(content)
});

// app.listen(9000, () => {
//     console.log("Listening on port 9000");
// })

Loadable.preloadAll().then(() => {
    app.listen(9000, () => {
        console.log("Listening on port 9000");
    })
});