// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features?api-version=2014-08-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.SQL/ActiveDirectoryAdmin\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.SQL/features/ActiveDirectoryAdmin\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/DbTest1\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/DbTest1\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/IndexAdvisorPublic\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisorPublic\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/QueryPerformanceInsight\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/QueryPerformanceInsight\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/SQL-DW\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/SQL-DW\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldb-ActiveDirectoryAdmin\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldb-ActiveDirectoryAdmin\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldb-elasticpool\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldb-elasticpool\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbsterling\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbsterling\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbtde\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbtde\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/IndexAdvisor\",\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2645',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:40cb2f6e-9334-4879-8132-60257fcb87e0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe7dc4bf-88f7-497a-b03b-0688184578da',
  'x-ms-routing-request-id': 'WESTUS:20150819T004035Z:fe7dc4bf-88f7-497a-b03b-0688184578da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:40:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features?api-version=2014-08-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.SQL/ActiveDirectoryAdmin\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.SQL/features/ActiveDirectoryAdmin\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/DbTest1\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/DbTest1\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/IndexAdvisorPublic\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisorPublic\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/QueryPerformanceInsight\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/QueryPerformanceInsight\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/SQL-DW\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/SQL-DW\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldb-ActiveDirectoryAdmin\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldb-ActiveDirectoryAdmin\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldb-elasticpool\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldb-elasticpool\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbsterling\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbsterling\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbtde\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbtde\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/IndexAdvisor\",\"properties\":{\"state\":\"Pending\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Features/providers/Microsoft.Sql/features/IndexAdvisor\",\"type\":\"Microsoft.Features/providers/features\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2645',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:40cb2f6e-9334-4879-8132-60257fcb87e0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'fe7dc4bf-88f7-497a-b03b-0688184578da',
  'x-ms-routing-request-id': 'WESTUS:20150819T004035Z:fe7dc4bf-88f7-497a-b03b-0688184578da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:40:34 GMT',
  connection: 'close' });
 return result; }]];