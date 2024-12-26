const accountId = 78674
let  accountEmail = "aaris@gmail.com"
var accountPasswprd = "18474"
/*
prefer not to use var
because of issue in block scope and fonctional scope 
*/

accountCity = "ahmd"
let accountState;
// accountId= 333 this is not allowed because const declared only once
accountEmail = "ak@gmail.com"
accountPasswprd = "9999"
accountCity = "jaipur"

console.log(accountId);

console.table([accountId,accountEmail,accountPasswprd,accountCity,accountState])