const parser = require('xml-js');
const loginWSDL = require('./login-wsdl.json');
const http = require('follow-redirects').http;

function login (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': loginWSDL.customer,
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
    console.log("jj")
    var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
        'path': loginWSDL.profileDisplay,
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


module.exports = {login, profileDisplay};