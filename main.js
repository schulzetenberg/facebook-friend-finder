var FB = require('fb');
var config = require('config');

const accessToken = config.get('facebook.accessToken');

FB.setAccessToken(accessToken);

FB.api('me', function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res);
});
