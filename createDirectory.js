const fs = require('fs')
const createDirectoryIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir): undefined)

//createDirectoryIfNotExists('c:\\teste')