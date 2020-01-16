const express = require('express');
const app = express();
const routes = require('./routes');
const DbConnection = require('./config/DbConnection');
require('dotenv').config();

DbConnection(process.env.MONGO_URL);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT , () => {
    console.log(`iniciado na porta ${process.env.PORT}`);
});
