const express = require('express');
const routes = require ('./routes');

const app = express();

app.use(express.json());
app.listen(3333)
app.use(routes)