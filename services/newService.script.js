module.exports = function(app, req, res, next, dirname){

    // CI VOGLIONO DATI - STRUTTURA
    global.store.Project[req.body.data.projectId].Service.push({code: req.body.data.code})

    res.send('ok')
    // EVERYTHING BOILS DOWN TO JS VARIABLES

}