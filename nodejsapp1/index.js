var fs = require('fs');
console.log(fs);
fs.readFile('file1.txt',function(err,data){
    console.log(data.toString());
})


var http = require('http');
var server = http.createServer((req, res) => {
    if(req.url=='/')
    res.write('welcome to page')
res.end();

});
server.listen(3333,()=>console.log('its working...'))
