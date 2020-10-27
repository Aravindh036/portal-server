const parser = require('xml-js');
const customerWSDL = require('./customer-wsdl.json');
const http = require('follow-redirects').http;

function login (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': customerWSDL.customer,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_customer_login_req>
                                <user_id>${req.body.userID}</user_id>
                                <password>${req.body.password}</password>
                            </sap:MT_customer_login_req>
                            </soapenv:Body>
                        </soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send({"status":JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_customer_login_res"]["status"]["_text"]})
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}

function profileDisplay(req, res){
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': customerWSDL.profileDisplay,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_cus_prof_dis_req>
                                <user_id>${req.body.userID}</user_id>
                            </sap:MT_cus_prof_dis_req>
                            </soapenv:Body>
                        </soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
            const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_prof_dis_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function profileUpdate(req, res){
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': customerWSDL.profileUpdate,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_cus_pro_up_req>
								<CUSTOMER_ID>${req.body.userID}</CUSTOMER_ID>
								<NAME>${req.body.name}</NAME>
								<COMPANY_NAME>${req.body.companyName}</COMPANY_NAME>
								<ADDRESS>${req.body.address}</ADDRESS>
								<CITY>${req.body.city}</CITY>
								<COUNTRY>${req.body.country}</COUNTRY>
								<MAIL_ID>${req.body.mailID}</MAIL_ID>
								<PHONE_NUMBER>${req.body.phoneNumber}</PHONE_NUMBER>
								<FAX_NUMBER>${req.body.faxNumber}</FAX_NUMBER>
								<GSTIN_NUMBER>${req.body.gstinNumber}</GSTIN_NUMBER>
							</sap:MT_cus_pro_up_req>
							</soapenv:Body>
						</soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
            const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_pro_up_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function inquiryData(req, res){
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': customerWSDL.inquiryData,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_cus_inquirydata_req>
								<customer_id>${req.body.userID}</customer_id>
							</sap:MT_cus_inquirydata_req>
							</soapenv:Body>
						</soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_inquirydata_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}

function deliveryList(req, res){
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': customerWSDL.deliveryList,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_cus_delivery_list_req>
								<customer_id>${req.body.userID}</customer_id>
							</sap:MT_cus_delivery_list_req>
							</soapenv:Body>
						</soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
			console.log(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_delivery_list_res"])
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_delivery_list_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function invoiceDetails(req, res){
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': customerWSDL.invoiceDetails,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};    
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_cus_invoice_req>
								<customer_id>${req.body.userID}</customer_id>
							</sap:MT_cus_invoice_req>
							</soapenv:Body>
						</soapenv:Envelope>`;
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk);
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
            const xml = body.toString();
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_cus_invoice_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}



module.exports = {login, profileDisplay, profileUpdate, inquiryData, deliveryList, invoiceDetails};