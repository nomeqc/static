# 使用
```js
md5('Message to hash');
var hash = md5.create();
hash.update('Message to hash');
hash.hex();

// HMAC
md5.hmac('key', 'Message to hash');

var hash = md5.hmac.create('key');
hash.update('Message to hash');
hash.hex();
```