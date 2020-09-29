import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';

import Routes from "../client/Routes";
import stats from '../../public/react-loadable.json';

export default (req, store, context) => {
    let modules = [];
    const html = renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        </Loadable.Capture>
    )
    let bundles = getBundles(stats, modules);
    let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
    let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    // console.log(bundles,'bundles')
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${styles.map(style => {
        return `<link href="/${style.file}" rel="stylesheet"/>`
    }).join('\n')}
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <title>Webpack-4</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        ${scripts.map(script => {
        return `<script src="/${script.file}"></script>`
    }).join('\n')}
        <script src="/bundle.js"></script>
    </body>
    </html>`
}