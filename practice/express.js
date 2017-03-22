var express = require("express");
var path = require("path");
var app = express();

app.use(express.static('./public'))
app.get("*",(req,res) => {
	let reqPath = req.path
	let file = ""

	if(reqPath === '/'){
		file = "index.html"
	}else{
		// abc => abc.html
		file = reqPath.replace("/","") + '.html'
	}

	res.sendFile( path.resolve( __dirname, file))
});

app.listen(7000)