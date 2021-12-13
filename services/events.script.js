const fs = require('fs')
const path = require('path')

module.exports = function(app, req, res, next, dirname){
    console.log('serving data...')

    var dto = req.body.data

    // salvo il dto su mongo
    // request python script!!! 
    // raccimulo i dati 

    fs.writeFileSync(path.join(dirname, 'data', 'hichartseries.data.js'), 'module.exports = ' + JSON.stringify(hcs), 'utf8')
    fs.writeFileSync(path.join(dirname, 'data', 'store.data.js'), 'module.exports = ' + JSON.stringify(store), 'utf8')
    //fs.readFileSync ...
    
    res.send(JSON.stringify({esito:'done'}))
}