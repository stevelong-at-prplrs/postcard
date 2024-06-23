import express from "express";
import ViteExpress from "vite-express";
import {serverListen, genReponseText, methodArr } from "./src/utils.js";

const app = express();
const port = 3001;
const host = "localhost";

app.use((req, res, next) => {
  res.set({"Access-Control-Allow-Origin" : "*", 
           "Access-Control-Allow-Methods" : methodArr.map(m => m.toUpperCase()).join(', '),
           "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With"})
  next();
});

app.use(express.static('dist'));

const server = app.listen(port, host);

ViteExpress.bind(app, server, async () => {
  const { root, base } = await ViteExpress.getViteConfig();
  console.log(`Serving app from root ${root}`);
  console.log(`Server is listening at http://${host}:${port}${base}`);
});

serverListen(methodArr, app, method => (req, res) => {
  res.type('text/plain');
  res.header('Access-Control-Allow-Origin', '*');
  const reqResponseStr = genReponseText(200, method.toUpperCase(), req.url, req.headers['user-agent']);
  console.log(reqResponseStr);
  return res.status(200).send(reqResponseStr);
});
