const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {login, profileDisplay, profileUpdate, inquiryData, deliveryList, invoiceDetails, paymentAndAging} = require('./customer');

app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/customer/login', login );
app.post('/customer/profileDisplay', profileDisplay );
app.post('/customer/profileUpdate', profileUpdate );
app.post('/customer/inquiryData', inquiryData );
app.post('/customer/deliveryList', deliveryList );
app.post('/customer/invoiceDetails', invoiceDetails );
app.post('/customer/paymentAndAging', paymentAndAging );

app.listen('8000',()=> console.log("server running"));