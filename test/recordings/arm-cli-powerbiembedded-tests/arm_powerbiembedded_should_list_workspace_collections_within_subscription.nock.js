// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3d1cd7a8-b035-4563-9288-dbe706cd672e',
    name: 'SAAS InfoNav Test_564339',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: 'microsoft.com',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_POWERBIEMBEDDED_TEST_LOCATION'] = 'southcentralus';
  process.env['AZURE_POWERBIEMBEDDED_TEST_SKU'] = 'S1';
  process.env['AZURE_POWERBIEMBEDDED_TEST_TIER'] = 'Standard';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/providers/Microsoft.PowerBI/workspaceCollections?api-version=2016-01-29')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/anbencic-wpc-test/providers/Microsoft.PowerBI/workspaceCollections/anbencic-test2\",\"name\":\"anbencic-test2\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-23T02:45:38.733\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/gnccp/providers/Microsoft.PowerBI/workspaceCollections/SmokeTestDay1\",\"name\":\"SmokeTestDay1\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-30T14:15:39.053\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/SmokeTest/providers/Microsoft.PowerBI/workspaceCollections/deleteme\",\"name\":\"deleteme\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-30T14:20:55.937\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/WCRG/providers/Microsoft.PowerBI/workspaceCollections/dasd\",\"name\":\"dasd\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-04-13T21:30:02.027\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/anbencic-gwc1/providers/Microsoft.PowerBI/workspaceCollections/anbencic1\",\"name\":\"anbencic1\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-04-26T20:11:36.367\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection571\",\"name\":\"azureNodeSdkTestWorkspaceCollection571\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-18T23:27:32.587\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN01\",\"name\":\"azureSkdNodeTestWCN01\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:14:30.25\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN02\",\"name\":\"azureSkdNodeTestWCN02\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:19:13.73\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN03\",\"name\":\"azureSkdNodeTestWCN03\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:21:14.123\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN04\",\"name\":\"azureSkdNodeTestWCN04\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:28:18.717\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN05\",\"name\":\"azureSkdNodeTestWCN05\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:29:01.757\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN06\",\"name\":\"azureSkdNodeTestWCN06\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:30:29.61\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN07\",\"name\":\"azureSkdNodeTestWCN07\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:33:15.777\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN08\",\"name\":\"azureSkdNodeTestWCN08\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"boucher\",\"tony\":\"ferrel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:33:47.477\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN09\",\"name\":\"azureSkdNodeTestWCN09\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"boucher\",\"tony\":\"ferrel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:35:55.867\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN10\",\"name\":\"azureSkdNodeTestWCN10\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:45:20.403\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN11\",\"name\":\"azureSkdNodeTestWCN11\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"bouche4r\",\"tony\":\"fer23rel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:45:34.743\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup1234/providers/Microsoft.PowerBI/workspaceCollections/azureSdkTestWCN01\",\"name\":\"azureSdkTestWCN01\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:32:07.46\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup1234/providers/Microsoft.PowerBI/workspaceCollections/azureSdkTestWCN02\",\"name\":\"azureSdkTestWCN02\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:33:50.907\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureXplatCliTestResourceGroup3498/providers/Microsoft.PowerBI/workspaceCollections/azureXplatCliTestWorkspaceCollection6437\",\"name\":\"azureXplatCliTestWorkspaceCollection6437\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:54:17.457\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureXplatCliTestResourceGroup3498/providers/Microsoft.PowerBI/workspaceCollections/azureXplatCliTestWorkspaceCollection4703\",\"name\":\"azureXplatCliTestWorkspaceCollection4703\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"value1\",\"tag2\":\"value2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:54:19.097\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}}]}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '9335',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: 'eb5125f9-1d1b-4a79-b129-f6472da74243',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14889',
  'x-ms-request-id': '83f07485-2f47-4233-9de3-3fe29f18e0a8',
  'x-ms-correlation-request-id': '83f07485-2f47-4233-9de3-3fe29f18e0a8',
  'x-ms-routing-request-id': 'WESTUS:20160521T015420Z:83f07485-2f47-4233-9de3-3fe29f18e0a8',
  date: 'Sat, 21 May 2016 01:54:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/providers/Microsoft.PowerBI/workspaceCollections?api-version=2016-01-29')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/anbencic-wpc-test/providers/Microsoft.PowerBI/workspaceCollections/anbencic-test2\",\"name\":\"anbencic-test2\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-23T02:45:38.733\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/gnccp/providers/Microsoft.PowerBI/workspaceCollections/SmokeTestDay1\",\"name\":\"SmokeTestDay1\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-30T14:15:39.053\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/SmokeTest/providers/Microsoft.PowerBI/workspaceCollections/deleteme\",\"name\":\"deleteme\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-03-30T14:20:55.937\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/WCRG/providers/Microsoft.PowerBI/workspaceCollections/dasd\",\"name\":\"dasd\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-04-13T21:30:02.027\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/anbencic-gwc1/providers/Microsoft.PowerBI/workspaceCollections/anbencic1\",\"name\":\"anbencic1\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-04-26T20:11:36.367\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection571\",\"name\":\"azureNodeSdkTestWorkspaceCollection571\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-18T23:27:32.587\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN01\",\"name\":\"azureSkdNodeTestWCN01\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:14:30.25\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN02\",\"name\":\"azureSkdNodeTestWCN02\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:19:13.73\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN03\",\"name\":\"azureSkdNodeTestWCN03\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:21:14.123\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN04\",\"name\":\"azureSkdNodeTestWCN04\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:28:18.717\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN05\",\"name\":\"azureSkdNodeTestWCN05\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:29:01.757\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN06\",\"name\":\"azureSkdNodeTestWCN06\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:30:29.61\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN07\",\"name\":\"azureSkdNodeTestWCN07\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:33:15.777\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN08\",\"name\":\"azureSkdNodeTestWCN08\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"boucher\",\"tony\":\"ferrel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:33:47.477\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN09\",\"name\":\"azureSkdNodeTestWCN09\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"boucher\",\"tony\":\"ferrel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:35:55.867\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN10\",\"name\":\"azureSkdNodeTestWCN10\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:45:20.403\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup3696/providers/Microsoft.PowerBI/workspaceCollections/azureSkdNodeTestWCN11\",\"name\":\"azureSkdNodeTestWCN11\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"criag\":\"bouche4r\",\"tony\":\"fer23rel\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T00:45:34.743\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup1234/providers/Microsoft.PowerBI/workspaceCollections/azureSdkTestWCN01\",\"name\":\"azureSdkTestWCN01\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:32:07.46\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup1234/providers/Microsoft.PowerBI/workspaceCollections/azureSdkTestWCN02\",\"name\":\"azureSdkTestWCN02\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:33:50.907\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureXplatCliTestResourceGroup3498/providers/Microsoft.PowerBI/workspaceCollections/azureXplatCliTestWorkspaceCollection6437\",\"name\":\"azureXplatCliTestWorkspaceCollection6437\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:54:17.457\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}},{\"id\":\"/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureXplatCliTestResourceGroup3498/providers/Microsoft.PowerBI/workspaceCollections/azureXplatCliTestWorkspaceCollection4703\",\"name\":\"azureXplatCliTestWorkspaceCollection4703\",\"type\":\"Microsoft.PowerBI/workspaceCollections\",\"location\":\"South Central US\",\"tags\":{\"tag1\":\"value1\",\"tag2\":\"value2\"},\"properties\":{\"provisioningState\":\"Succeeded\",\"createdDate\":\"2016-05-21T01:54:19.097\",\"status\":\"Active\"},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"}}]}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '9335',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: 'eb5125f9-1d1b-4a79-b129-f6472da74243',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14889',
  'x-ms-request-id': '83f07485-2f47-4233-9de3-3fe29f18e0a8',
  'x-ms-correlation-request-id': '83f07485-2f47-4233-9de3-3fe29f18e0a8',
  'x-ms-routing-request-id': 'WESTUS:20160521T015420Z:83f07485-2f47-4233-9de3-3fe29f18e0a8',
  date: 'Sat, 21 May 2016 01:54:19 GMT',
  connection: 'close' });
 return result; }]];