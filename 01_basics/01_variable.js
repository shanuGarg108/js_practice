const accountId = 112233
let accountEmail = "Sg@google.com"
var accountPassword = "Shanu"
accountCity="Jaipur"
let accountState;

// accountId = 112244 // not allowed

accountEmail = "Sg@gmail.com"
accountPassword = "Shanu123"
accountCity = "Noida"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var because it has some functional and block scope issue
