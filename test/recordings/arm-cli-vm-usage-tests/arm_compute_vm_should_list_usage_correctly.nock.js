// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 2000,\r\n      \"name\": {\r\n        \"value\": \"availabilitySets\",\r\n        \"localizedValue\": \"Availability Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 15,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"cores\",\r\n        \"localizedValue\": \"Total Regional Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 9,\r\n      \"limit\": 10000,\r\n      \"name\": {\r\n        \"value\": \"virtualMachines\",\r\n        \"localizedValue\": \"Virtual Machines\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 50,\r\n      \"name\": {\r\n        \"value\": \"virtualMachineScaleSets\",\r\n        \"localizedValue\": \"Virtual Machine Scale Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDSFamily\",\r\n        \"localizedValue\": \"Standard DS Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDFamily\",\r\n        \"localizedValue\": \"Standard D Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 12,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardA0_A7Family\",\r\n        \"localizedValue\": \"Standard A0-A7 Family Cores\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1436',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131067171185904159',
  'x-ms-request-id': '047cc0be-ef66-4488-9fea-63ecf8338cf3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9b0da8d9-e827-479a-9ae5-d17adfb1f8ff',
  'x-ms-routing-request-id': 'WESTUS:20160503T064316Z:9b0da8d9-e827-479a-9ae5-d17adfb1f8ff',
  date: 'Tue, 03 May 2016 06:43:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 2000,\r\n      \"name\": {\r\n        \"value\": \"availabilitySets\",\r\n        \"localizedValue\": \"Availability Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 15,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"cores\",\r\n        \"localizedValue\": \"Total Regional Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 9,\r\n      \"limit\": 10000,\r\n      \"name\": {\r\n        \"value\": \"virtualMachines\",\r\n        \"localizedValue\": \"Virtual Machines\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 50,\r\n      \"name\": {\r\n        \"value\": \"virtualMachineScaleSets\",\r\n        \"localizedValue\": \"Virtual Machine Scale Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDSFamily\",\r\n        \"localizedValue\": \"Standard DS Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDFamily\",\r\n        \"localizedValue\": \"Standard D Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 12,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardA0_A7Family\",\r\n        \"localizedValue\": \"Standard A0-A7 Family Cores\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1436',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131067171185904159',
  'x-ms-request-id': '047cc0be-ef66-4488-9fea-63ecf8338cf3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9b0da8d9-e827-479a-9ae5-d17adfb1f8ff',
  'x-ms-routing-request-id': 'WESTUS:20160503T064316Z:9b0da8d9-e827-479a-9ae5-d17adfb1f8ff',
  date: 'Tue, 03 May 2016 06:43:16 GMT',
  connection: 'close' });
 return result; }]];