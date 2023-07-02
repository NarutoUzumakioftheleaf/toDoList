const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Buy Food","cook Food","Eat Food"];
var workItems=[];
app.set    ("view engine","ejs");
app.get("/",function(req,res){
var today=new Date();
var options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
var day=today.toLocaleDateString("en-US",options);
res.render("list",{listTitle:day,newlistitems:items
});
});

app.post("/",function(req,res){
  var item=req.body.newitem;
  items.push(item);
  res.redirect("/");
})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list",newlistitems:workItems})
})
app.post("/work",function(req,res){
  let item=  req.body.newitem;
 workItems.push(item)
 res.redirect("/work");
})
app.listen(3000,function(){
  console.log("Server started on port 3000");
})
