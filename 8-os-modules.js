const os = require('os')
console.log(os.userInfo())
uptimeOS = os.uptime()
console.log(uptimeOS)
const OSdetails = {
 osType: os.type(),
 rel: os.release(),
 upTime:os.uptime() +"secs",

}

console.log(OSdetails)
