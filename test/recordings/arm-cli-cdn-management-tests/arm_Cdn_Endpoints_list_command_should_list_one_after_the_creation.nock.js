// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint001';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint002';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-59e92ce9-af32-4879-baad-d5f36a9ede94.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"properties\":{\r\n        \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n          {\r\n            \"name\":\"cliTestOrigin01\",\"properties\":{\r\n              \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n            }\r\n          }\r\n        ],\"customDomains\":[\r\n          \r\n        ],\"contentTypesToCompress\":[\r\n          \r\n        ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n          \r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1006',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ff03809d-b1fd-4b0e-894a-9be6e982edaa',
  'x-ms-client-request-id': 'b846895e-da0e-4ac1-811b-d6f0ecc356f6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c733f858-43f5-45b8-9e82-58d1215dee79',
  'x-ms-routing-request-id': 'CENTRALUS:20161219T230542Z:c733f858-43f5-45b8-9e82-58d1215dee79',
  date: 'Mon, 19 Dec 2016 23:05:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cliTestEndpoint001\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint001\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"properties\":{\r\n        \"hostName\":\"cliTestEndpoint001.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n          {\r\n            \"name\":\"cliTestOrigin01\",\"properties\":{\r\n              \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n            }\r\n          }\r\n        ],\"customDomains\":[\r\n          \r\n        ],\"contentTypesToCompress\":[\r\n          \r\n        ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n          \r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1006',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ff03809d-b1fd-4b0e-894a-9be6e982edaa',
  'x-ms-client-request-id': 'b846895e-da0e-4ac1-811b-d6f0ecc356f6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c733f858-43f5-45b8-9e82-58d1215dee79',
  'x-ms-routing-request-id': 'CENTRALUS:20161219T230542Z:c733f858-43f5-45b8-9e82-58d1215dee79',
  date: 'Mon, 19 Dec 2016 23:05:41 GMT',
  connection: 'close' });
 return result; }]];