// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '29d9d479ed2e91ce8a4ee67d3218db57',
  date: 'Mon, 25 Apr 2016 08:41:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '29d9d479ed2e91ce8a4ee67d3218db57',
  date: 'Mon, 25 Apr 2016 08:41:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/29d9d479ed2e91ce8a4ee67d3218db57')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>29d9d479-ed2e-91ce-8a4e-e67d3218db57</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6f4005ede6a3a67daab9476821811364',
  date: 'Mon, 25 Apr 2016 08:42:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/29d9d479ed2e91ce8a4ee67d3218db57')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>29d9d479-ed2e-91ce-8a4e-e67d3218db57</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6f4005ede6a3a67daab9476821811364',
  date: 'Mon, 25 Apr 2016 08:42:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8665f7298addab9b898471516ca3a73b',
  date: 'Mon, 25 Apr 2016 08:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8665f7298addab9b898471516ca3a73b',
  date: 'Mon, 25 Apr 2016 08:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '222',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '249eafed7f23a1feb806d7d6b06c7522',
  date: 'Mon, 25 Apr 2016 08:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '222',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '249eafed7f23a1feb806d7d6b06c7522',
  date: 'Mon, 25 Apr 2016 08:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg/rules/xplatTestNsgRule', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd46047c3c547a7ada06de04d68cb3a1b',
  date: 'Mon, 25 Apr 2016 08:42:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg/rules/xplatTestNsgRule', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd46047c3c547a7ada06de04d68cb3a1b',
  date: 'Mon, 25 Apr 2016 08:42:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/d46047c3c547a7ada06de04d68cb3a1b')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d46047c3-c547-a7ad-a06d-e04d68cb3a1b</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '670d2ddcdff8a14a848e52274bfdd8cf',
  date: 'Mon, 25 Apr 2016 08:42:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/d46047c3c547a7ada06de04d68cb3a1b')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d46047c3-c547-a7ad-a06d-e04d68cb3a1b</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '670d2ddcdff8a14a848e52274bfdd8cf',
  date: 'Mon, 25 Apr 2016 08:42:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>xplatTestNsgRule</Name><Type>Inbound</Type><Priority>250</Priority><Action>Allow</Action><SourceAddressPrefix>10.0.0.0/24</SourceAddressPrefix><SourcePortRange>200</SourcePortRange><DestinationAddressPrefix>10.0.0.0/12</DestinationAddressPrefix><DestinationPortRange>250</DestinationPortRange><Protocol>TCP</Protocol><State>Active</State></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2865',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dfc7db25a0569bbe877cf561b0abd14e',
  date: 'Mon, 25 Apr 2016 08:42:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/xplatTestNsg?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNsg</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>xplatTestNsgRule</Name><Type>Inbound</Type><Priority>250</Priority><Action>Allow</Action><SourceAddressPrefix>10.0.0.0/24</SourceAddressPrefix><SourcePortRange>200</SourcePortRange><DestinationAddressPrefix>10.0.0.0/12</DestinationAddressPrefix><DestinationPortRange>250</DestinationPortRange><Protocol>TCP</Protocol><State>Active</State></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2865',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dfc7db25a0569bbe877cf561b0abd14e',
  date: 'Mon, 25 Apr 2016 08:42:52 GMT',
  connection: 'close' });
 return result; }]];