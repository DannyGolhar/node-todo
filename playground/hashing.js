const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var message = 'Hi this is hashing';
var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = jwt.sign(data,'abcd1234');
console.log(token);

var decoded = jwt.verify(token, 'abcd1234')
console.log(decoded);

// var data = {
//     id: 4
// };

// var token = {
//  data,
//  hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }

// // data.id = 5;
// var resultHash = SHA256(JSON.stringify(data) + 'secret').toString();

// if(token.hash === resultHash) {
//     console.log('data was not changed');
// }else {
//     console.log('data was changed');
// }