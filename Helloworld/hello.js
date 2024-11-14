// const math = require("./math");
// console.log(math(2,9));

// var add = (a,b) => a+b;

// var ans =  add(45,6);
// console.log(ans);

// var _ = require('lodash');

// var fs = require("fs");
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi' + user.username + '!', ()=>{
//      console.log('file is created');
// });

const jsonString = '{"name":"erok", "age": 20, "city": "Patna"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);