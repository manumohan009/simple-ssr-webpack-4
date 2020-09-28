import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Routes from "./client/Routes";
import renderer from './helpers/renderer'

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    // const content = renderer(req);
    let modules = [];
    const html = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
    )
    const content =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <title>Webpack-4</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>`
    res.send(content)
});

app.listen(9000, () => {
    console.log("Listening on port 9000");
})

// Loadable.preloadAll().then(() => {
//     app.listen(9000, () => {
//         console.log("Listening on port 9000");
//     })
// });