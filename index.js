const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const {login, profileDisplay, profileUpdate, inquiryData} = require('./customer');

app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/customer/login', login );
app.post('/customer/profileDisplay', profileDisplay );
app.post('/customer/profileUpdate', profileUpdate );
app.post('/customer/inquiryData', inquiryData );

app.listen('8000',()=> console.log("server running"));