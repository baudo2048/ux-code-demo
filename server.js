const express = require('express');
const http = require('http')
const path = require('path')

const app = express();



const server = http.createServer(app)

var expressWs = require('express-ws')(app,server);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

app.get('/', (req, res)=> {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
} )

global.store = {}
global.store.users = []

app.get('/globalvar', (req, res)=> {
    store.id = store.id+1
    res.send(JSON.stringify(store))
})

app.post('/json', (req, res, next)=>{

    var usr = 'root'
    var pass = 'root'

    console.log('usr - ' + usr + ' - ' + pass)

var users = {
    'admin@katecode.com': 'admin',
    'mario': 'juniors',
    'root': 'root'
}

if(users[usr]==pass){
    console.log('json rest ' + path.join(__dirname,'services',`${req.body.meta.serviceName}.script.js`))
    res.setHeader('Content-Type', 'application/json');

    // SECURITY IS ENOUGH PER TUTTI
    require(path.join(__dirname,'services',`${req.body.meta.serviceName}.script.js`))(app, req, res, next, __dirname)
} else {
    res.send(JSON.stringify({esito:'login'}))
}


})

app.get('/json', (req, res, next)=>{

    console.log('houuu    ======= ' + req.query.serviceName)

    console.log('json rest ' + path.join(__dirname,'services',`${req.query.serviceName}.script.js`))
    res.setHeader('Content-Type', 'application/json');

    // SECURITY IS ENOUGH PER TUTTI
    require(path.join(__dirname,'services',`${req.query.serviceName}.script.js`))(app, req, res, next, __dirname)



})

app.ws('/sock', function(ws, req) {
    //console.log('Called every time a message or event (open, etc.) occur')
    ws.on('open', function(){
        //ws.send('something');        
    })

    

    ws.on('message', function(msg) {
        expressWs.getWss().clients.forEach(function each(client) {
            client.send(JSON.stringify({m:msg}));
        })
      //console.log(msg);
      //ws.send(msg);
    });
  });


