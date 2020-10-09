const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const {login, profileDisplay} = require('./customer');

app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/customer/login', login );
app.post('/customer/profileDisplay', profileDisplay );

app.listen('8000',()=> console.log("server running"));