# SHG
## Simple Hash Generator
---  
### 1. Encrypt and Decrypt
```javascript
const { encrypt, decrypt } = require('shg');

const encr = encrypt('hello', 'mysecret');
const decr = decrypt(encr, 'mysecret');
console.log(encr);
console.log(decr);
```  
Will return an output:  
> 0111d9e0512cffc7e544698841a90dea
   
> hello
---