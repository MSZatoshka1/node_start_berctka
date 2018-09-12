const app = require('./app');
var path    = require("path");


app.get('/',function(req,res){
    res.sendfile('./public/index.html');
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});