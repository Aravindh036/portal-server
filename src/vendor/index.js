const  VendorWSDL = require('./vendor-wsdl.json');
const parser = require('xml-js');
const http = require('follow-redirects').http;


function quotationPurchase (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': VendorWSDL.quotationPurchase,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_vendor_quotation_req>
                                <user_id>${req.body.userID}</user_id>
                                <ADD1>?</ADD1>
                            </sap:MT_vendor_quotation_req>
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
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_vendor_quotation_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function goodsReceipt (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': VendorWSDL.goodsReceipt,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_vendor_goods_req>
								<user_id>${req.body.userID}</user_id>
								<!--Optional:-->
								<ADD1>?</ADD1>
							</sap:MT_vendor_goods_req>
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
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_vendor_goods_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function paymentOverdue (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': VendorWSDL.payment,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_vendor_payment_req>
								<user_id>${req.body.userID}</user_id>
								<!--Optional:-->
								<ADD1>?</ADD1>
							</sap:MT_vendor_payment_req>
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
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_vendor_payment_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}

module.exports = {quotationPurchase, goodsReceipt, paymentOverdue};