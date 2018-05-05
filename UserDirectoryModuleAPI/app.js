var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost/userdirectory");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.set("view engine","ejs");

//SCHEMA SETUP
var userSchema = new mongoose.Schema({
	username: String,
	address: String,
	contact: Number,
	email: String,
	image: String
}); 

var User = mongoose.model("User",userSchema);
module.exports = User;



app.get("/",function(req,res){
	//Get all users
	User.find({}, function(err, allusers){
		if(err){
			console.log(err);
		}else{
			res.send(allusers); 	
		}
	})
	// res.send("This will be the landing page");
	// res.render("landing");
});

app.post("/newuser",function(req,res){
	res.render("newuser");
});

app.listen(3000,function(){
	console.log("The server has started");
});