// a basic GetOrders request to the Trading API via XML-POST
// fill in keys from your eBay API account
// see http://developer.ebay.com/devzone/xml/docs/reference/ebay/GetOrders.html

var ebay = require('../index.js');


  //Sandbox
  var devName = '3f9585bb-fd92-4469-b4e2-902860ce55ac'
    , cert =  'SellThat-8ba9-4959-ab7a-ab56cc6c1d57'
    , appName = '64215224-0a0c-4aca-9f6b-b60765b3cf7b'
    // , token = 'AgAAAA**AQAAAA**aAAAAA**goglUg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4GhCpiEow6dj6x9nY+seQ**HlQCAA**AAMAAA**ERyzHFua854h3C7PX1G+vTzrTOxKKPx9pbwgJ8UuxXaECbRfoXr/wY+wanaM8IPocv9J9xbV3CoO+4NxDKftnqId7+kAu6WZw9Jec75fIximTUsbd0PrHvxPWBDJ6TY8RLu1lC5kGn8QaXzsvneMPSBVnaj25oboLdlN9brLUGKYXa8ukW7xykYD8+TWXjpRtDfZDWoNnK/l2r4WzITi4eYHBfqEuxOWEUC2SngJBa/gVSkmRyqKzmRP7pQeROh5br7upHRO6Mso+LrbBBGZh3H1rJMLRxcpsFEvB+cHwQNOFVHdAglId+zMiKDptsGxJCypEJ6whwTxWFgT053hsAO2QMyYwoYWz4/lnT1aK7o4z3axdz2ctUJMOlSkUbS4WQhTxY7dtxysvTGlopNSV6HeNEGEk9JJ5b/A8LLXB3AfHtMCdnt/TEJvtmRKLEoMPAAEuKBK/xz0sMvE+5XnTWV4VgXoSVCcZHR3KsM1a9oZlm78o1LkX5wvZujRpimb+WQJZF4vJApCDuIww+xd/hM+ueM3DPiSB8qt0AKeiHlt5qyOjP4MqHQXzMbaIfcOQqU4jn/gdK1hJfsgltMSpFKnYop+k1vKJpb/gEQS9lfGX8z047jzt96539wlZZ916irUZYFu+lDz0tXUUVZa+W3Xcito3NRptgSl/a1BocLwjsC4rYnSIgZdKH+ZfWmhXlLRSLLRz7Ugfjyh8b0CxIWfrVl4QvDdBxC2aJNbLQNw5kqxku7tOplnIW+CY4hI'
  
  //Prod
  // var devName = '3f9585bb-fd92-4469-b4e2-902860ce55ac'
  //   , cert =  'e3a42380-5838-4b5f-b10d-0179de0b7e8e'
  //   , appName = 'SellThat-c50c-4ead-b609-8445f1218c7a'
  //   , token = 'AgAAAA**AQAAAA**aAAAAA**0YUlUg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wJmYahCpiDowqdj6x9nY+seQ**KfQBAA**AAMAAA**nuuJq5/I2c69FtXiVroN58s49NkmT5m3sAgTFgFttUgdWgH6Fa0W8GhTmrfAWbz/aoCNec4nDI6NFN82d5duAtU8DzcFeetfQd/LjarMTjJcOOJWWygFaW0wFJ15lj1E1TZ8P0GLS9m0c8yMdaGlWP8RQvbQVSYfKF5pFMQu+ElUsX3e5s/6/j7ASIYXo5kP+R/ldBlZw+n3yikvtdAV3UsVy9mWkQZLzU2ex3dNPnfo454/YJV1nzdL+oyFmIahQkM6FA5t4AM98om6wvKVD36e4UyeU7uTpzJ8ynNgzpItR/hhtggwyxW7aZam1qjv6B9S1Mj4aM6Qk3FE6A/KMn7R4zcxzM4MRGIaLU8NqDogDu7q6m+fBVqbp24K8fyjAQ5pcNnG0q9YtIb8Es6K7dW8eenLsnLlWz90r3FNv7Bp9tZfODO+SUmUC+Rj9u4RbY2cEJe/t84jQePgocCI6p2JzWCLhS8hfidUlExpcCt/ubjM67lJTZnfLLgTajdefI9qu4N6q8Nvy10rrAgV7dm9mMcIV67gOiK42AtPdB8oa0bWGi1glldJmnL/zzRTVJlzkqLEJ8UYjscz/cmNdljNnQhEdVC2LNj1Vda3Wu8wh6KuxyA8DmSL9BWD7R7tHHtkK42/CLSNP36AYjwZNUWK0plWW5OARWp8XbLgfCuqu1JmzLkvgnagQefnRjkeQHTqSOyPF8MMsGmQ3xdYuXnbXn6V61/LEmZqZBkfsOAUV2bzCzxtTosGKJe7X54h'


ebay.ebayApiPostXmlRequest({
  serviceName : 'Trading',
  opType : 'GetOrders',
  
  devName: devName,
  cert: cert,
  appName: appName,
  
  sandbox: true,
  
  params: {
    'authToken': token,
    'OrderStatus': 'Active',
    'NumberOfDays': 1,
    // 'OrderID': [123456789]
  }
  
}, function(error, results) {
  if (error) {
    console.dir(error);
    process.exit(1);
  }
  console.dir(results);
});