// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1626',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': '5ca36bb1-2377-4eca-a5b1-5e9c67197aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': '626dd7db-de7e-4272-8442-b4f68fe9c609',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084252Z:626dd7db-de7e-4272-8442-b4f68fe9c609',
  date: 'Thu, 21 Apr 2016 08:42:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1626',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': '5ca36bb1-2377-4eca-a5b1-5e9c67197aaa',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': '626dd7db-de7e-4272-8442-b4f68fe9c609',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084252Z:626dd7db-de7e-4272-8442-b4f68fe9c609',
  date: 'Thu, 21 Apr 2016 08:42:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160421-164252319\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/xplatvmExt-20160421-164252319.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'ca49936d-a39a-4b54-bc07-1e57700d47c8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': '1c69f867-b7ad-48ca-ac2b-bc4922ee6c28',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084255Z:1c69f867-b7ad-48ca-ac2b-bc4922ee6c28',
  date: 'Thu, 21 Apr 2016 08:42:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160421-164252319\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/xplatvmExt-20160421-164252319.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1991',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'ca49936d-a39a-4b54-bc07-1e57700d47c8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1165',
  'x-ms-correlation-request-id': '1c69f867-b7ad-48ca-ac2b-bc4922ee6c28',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084255Z:1c69f867-b7ad-48ca-ac2b-bc4922ee6c28',
  date: 'Thu, 21 Apr 2016 08:42:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"ca49936d-a39a-4b54-bc07-1e57700d47c8\",\r\n  \"startTime\": \"2016-04-21T08:42:55.3433595+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'c15fba23-1455-46df-ba3b-eb51f24d46e5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '16a0ba72-4e3d-431c-86a2-10679f61a679',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084328Z:16a0ba72-4e3d-431c-86a2-10679f61a679',
  date: 'Thu, 21 Apr 2016 08:43:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"ca49936d-a39a-4b54-bc07-1e57700d47c8\",\r\n  \"startTime\": \"2016-04-21T08:42:55.3433595+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'c15fba23-1455-46df-ba3b-eb51f24d46e5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '16a0ba72-4e3d-431c-86a2-10679f61a679',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084328Z:16a0ba72-4e3d-431c-86a2-10679f61a679',
  date: 'Thu, 21 Apr 2016 08:43:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"ca49936d-a39a-4b54-bc07-1e57700d47c8\",\r\n  \"startTime\": \"2016-04-21T08:42:55.3433595+00:00\",\r\n  \"endTime\": \"2016-04-21T08:43:32.499355+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'a76fe1b4-46ee-44ad-a6bb-cf9d0744e489',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': 'e1b4b92c-c698-4c30-bd42-611c6abc838c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084400Z:e1b4b92c-c698-4c30-bd42-611c6abc838c',
  date: 'Thu, 21 Apr 2016 08:44:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/eastus/operations/ca49936d-a39a-4b54-bc07-1e57700d47c8?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"ca49936d-a39a-4b54-bc07-1e57700d47c8\",\r\n  \"startTime\": \"2016-04-21T08:42:55.3433595+00:00\",\r\n  \"endTime\": \"2016-04-21T08:43:32.499355+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'a76fe1b4-46ee-44ad-a6bb-cf9d0744e489',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': 'e1b4b92c-c698-4c30-bd42-611c6abc838c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084400Z:e1b4b92c-c698-4c30-bd42-611c6abc838c',
  date: 'Thu, 21 Apr 2016 08:44:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160421-164252319\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/xplatvmExt-20160421-164252319.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'dc1c5cb0-37fe-43b4-952b-dc9a7eb551f6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '6f14380a-ec8e-4522-a2ed-bfd32319d890',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084403Z:6f14380a-ec8e-4522-a2ed-bfd32319d890',
  date: 'Thu, 21 Apr 2016 08:44:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"2f0fbb93-858c-4885-bd4a-1f0f8e8902b8\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli279e43b19fb65d0b-os-1461227914028\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/cli279e43b19fb65d0b-os-1461227914028.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160421-164252319\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext7439.blob.core.windows.net/xplatstoragecntext9885/xplatvmExt-20160421-164252319.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext7439.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestGExtension9100/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'ddbc6cc0-a4fa-465a-b70a-449085a66949_131056202497686426',
  'x-ms-request-id': 'dc1c5cb0-37fe-43b4-952b-dc9a7eb551f6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '6f14380a-ec8e-4522-a2ed-bfd32319d890',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T084403Z:6f14380a-ec8e-4522-a2ed-bfd32319d890',
  date: 'Thu, 21 Apr 2016 08:44:03 GMT',
  connection: 'close' });
 return result; }]];