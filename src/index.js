import express from "express";
import React from "react";
import Loadable from 'react-loadable';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer'
import Routes from './client/Routes';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      // console.log(route,'route')
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(9000, () => {
    console.log("Listening on port 9000");
  })
});