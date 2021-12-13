module.exports = function(app, req, res, next, dirname){
    var theInstructions = "console.log('Hello World text executed'); var x = 100; return {esito:98}";

    var F=new Function (theInstructions);

    store.id = store.id+1
    res.send(JSON.stringify(F()))
}