const  GenericWSDL = require('./generic-wsdl.json');
const parser = require('xml-js');
const http = require('follow-redirects').http;

function genericLogin (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': GenericWSDL.login,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_generic_login_req>
                                <user_id>${req.body.user_id}</user_id>
                                <password>${req.body.password}</password>
                                <type>${req.body.type}</type>
                            </sap:MT_generic_login_req>
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
            res.send({"status":JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_generic_login_res"]["status"]["_text"]})
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}

function genericProfileDisplay (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': GenericWSDL.profileDisplay,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_generic_pro_dis_req>
                                <user_id>${req.body.user_id}</user_id>
                                <profile_type>${req.body.profile_type}</profile_type>
                            </sap:MT_generic_pro_dis_req>
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
            res.send({"status":JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_generic_pro_dis_res"]})
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}


function genericProfileUpdate (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': GenericWSDL.profileUpdate,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_generic_pro_up_req>
                                <LIFNR>${req.body.user_id}</LIFNR>
                                <LAND1>${req.body.country}</LAND1>
                                <NAME1>${req.body.name}</NAME1>
                                <TELF1>${req.body.telephone}</TELF1>
                                <TELFX>${req.body.faxnumber}</TELFX>
                                <ORT01>${req.body.city}</ORT01>
                                <PSTLZ>${req.body.postalCode}</PSTLZ>
                                <STRAS>${req.body.address}</STRAS>
                                <ADRNR>${req.body.street}</ADRNR>
                            </sap:MT_generic_pro_up_req>
                            </soapenv:Body>
						</soapenv:Envelope>`;
						console.log(postData)
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk); 
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			console.log(xml);
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send({"status":JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_generic_pro_up_res"]})
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}

function genericDashboardDisplay (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': GenericWSDL.genericDashboardDisplay,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
							<soapenv:Header/>
							<soapenv:Body>
							<sap:MT_GenericDashboard_req>
								<user_id>${req.body.user_id}</user_id>
								<portal>${req.body.portal}</portal>
								<type>${req.body.type}</type>
								<!--Optional:-->
								<ADD1>?</ADD1>
								<!--Optional:-->
								<ADD2>?</ADD2>
							</sap:MT_GenericDashboard_req>
							</soapenv:Body>
						</soapenv:Envelope>`;
						console.log(postData)
	const req1 = http.request(options, function (res1) {
		const chunks = [];
		res1.on("data", function (chunk) {
			chunks.push(chunk); 
		});
		res1.on("end", function (chunk) {
			const body = Buffer.concat(chunks);
			const xml = body.toString();
			console.log(xml);
			const data = parser.xml2json(xml, {compact: true, spaces: 4});
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_GenericDashboard_res"])
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}



module.exports = {genericLogin, genericProfileDisplay, genericProfileUpdate, genericDashboardDisplay}