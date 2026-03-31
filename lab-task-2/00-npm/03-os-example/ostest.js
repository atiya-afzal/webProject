const os = require("os");
console.log(os.freemem());
console.log(os.uptime());
//template string available with ES6
console.log(`Home Directory ${os.homedir}`);
