const cors = require('cors');
const express = require('express');
const routes = require('./routes');


require('./database');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER,Content-Type');
    app.use(cors());
    next();
})

app.use(routes);

app.listen(3333);