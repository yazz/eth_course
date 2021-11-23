// compile code will go here
const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(
                    __dirname,
                    "contracts",
                    "inbox.sol")

const source = fs.readFileSync(inboxPath, "utf8")

let out = solc.compile(source,1)

console.log(out)
module.exports = out.contracts[':Inbox']
