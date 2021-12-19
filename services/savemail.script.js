module.exports = function(app, req, res, next, dirname){

    // CI VOGLIONO DATI - STRUTTURA
    global.store.users.push(req.body.data)

}