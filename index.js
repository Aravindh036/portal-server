const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { login, profileDisplay, profileUpdate, inquiryData, deliveryList, invoiceDetails, paymentAndAging } = require('./src/customer');

const { genericLogin, genericProfileDisplay, genericProfileUpdate, genericDashboardDisplay } = require('./src/generic');

const {quotationPurchase, goodsReceipt, paymentOverdue} = require('./src/vendor');
const {leaveRequest} = require('./src/employee');
app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/customer/login', login);
app.post('/customer/profileDisplay', profileDisplay);
app.post('/customer/profileUpdate', profileUpdate);
app.post('/customer/inquiryData', inquiryData);
app.post('/customer/deliveryList', deliveryList);
app.post('/customer/invoiceDetails', invoiceDetails);
app.post('/customer/paymentAndAging', paymentAndAging);


app.post('/generic/login', genericLogin);
app.post('/generic/profileUpdate', genericProfileUpdate);
app.post('/generic/profileDisplay', genericProfileDisplay);
app.post('/generic/dashboard', genericDashboardDisplay);


app.post('/vendor/quotationPurchase', quotationPurchase);
app.post('/vendor/goodsReceipt', goodsReceipt);
app.post('/vendor/paymentOverdue', paymentOverdue);

app.post('/employee/leaveRequest', leaveRequest);


app.listen('8000', () => console.log("Node server running...")); 