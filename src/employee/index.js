const  EmployeeWSDL = require('./employee-wsdl.json');
const parser = require('xml-js');
const http = require('follow-redirects').http;


function leaveRequest (req, res) {
	var options = {
		'method': 'POST',
		'port': 50000,
		'host': 'dxktpipo.kaarcloud.com',
		'path': EmployeeWSDL.leaveData,
		'headers': {
			'Content-Type': 'application/xml',
			'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
		},
		'maxRedirects': 20
	};
	const postData =  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sap="https://sap.dashboard.com">
                            <soapenv:Header/>
                            <soapenv:Body>
                            <sap:MT_GenericDashboardUpdate_req>
                                <records>
                                    <FIELD1>${req.body.request_id}</FIELD1>
                                    <FIELD2>${req.body.user_id}</FIELD2>
                                    <FIELD3>${req.body.leave_type}</FIELD3>
                                    <FIELD4>${req.body.leave_date}</FIELD4>
                                    <FIELD5>${req.body.start_time}</FIELD5>
                                    <FIELD6>${req.body.end_time}</FIELD6>
                                    <FIELD7>${req.body.hours}</FIELD7>
                                    <FIELD8>${req.body.reporting}</FIELD8>
                                    <FIELD9>${req.body.reason}</FIELD9>
                                    <FIELD10>?</FIELD10>
                                    <FIELD11>?</FIELD11>
                                    <FIELD12>?</FIELD12>
                                    <FIELD13>?</FIELD13>
                                    <FIELD14>?</FIELD14>
                                    <!--Zero or more repetitions:-->
                                    <ITEMS>
                                        <FIELD1>?</FIELD1>
                                        <FIELD2>?</FIELD2>
                                        <FIELD3>?</FIELD3>
                                        <FIELD4>?</FIELD4>
                                        <FIELD5>?</FIELD5>
                                        <FIELD6>?</FIELD6>
                                        <FIELD7>?</FIELD7>
                                        <FIELD8>?</FIELD8>
                                        <FIELD9>?</FIELD9>
                                        <FIELD10>?</FIELD10>
                                    </ITEMS>
                                </records>
                                <portal>employee</portal>
                                <type>leave-request</type>
                            </sap:MT_GenericDashboardUpdate_req>
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
            res.send(JSON.parse(data)["SOAP:Envelope"]["SOAP:Body"]["ns0:MT_GenericDashboardUpdate_res"]);
		});
		res1.on("error", function (error) {
			console.error(error);
		});
	});

	req1.write(postData);

	req1.end();
}



module.exports = {leaveRequest}