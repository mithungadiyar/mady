
const {readFileSync, writeFileSync, write} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


//writeFileSync('./content/result.txt',`Here is the result : ${first} and ${second}`)
//console.log(second)

writeFileSync('./content/result.txt',`Here is the result : ${first} and ${second}`,{flag: 'a' })
console.log('done with the task')
console.log('starting with the next one')

