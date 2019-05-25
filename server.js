// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//timestamp
app.get("/api/timestamp/:date",(req,res)=>{
  let dateStr=req.params.date;
   let mydate=null;
  if(dateStr.indexOf('-')>=0){
    mydate=new Date(req.params.date);
  }else{
    mydate=new Date(parseInt(dateStr)*1000);
  }
  
 
  console.log(mydate,new Date(parseInt(dateStr)*1000))
  res.send({unix:Math.floor(mydate.getTime()/1000),utc:mydate})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});