module.exports = function(app, req, res, next, dirname){

    
    console.log('SERVICE INVOKED: ')
    eval (global.store.Project[req.body.data.projectId].Service[req.body.data.serviceId].code)

}