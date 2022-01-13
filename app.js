const cors = require("cors");
const express = require("express");
const app = express();


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let users = [
    {email: "john@john.com", name:"john", role:"admin"},
    {email: "kal@kal.com", name:"kal", role:"admin"},
    {email: "samantha@samantha.com", name:"samantha", role:"admin"},
    {email: "charlie@charlie.com", name:"charlie", role:"dev"},
];


app.get("/users", (req, res)=>{
  res.json({error:false, payload:users, msg:"get users"});
});

app.post("/user", (req, res)=>{
  let {email, name, role} = req.body;

  users.push({email, name, role});
  res.json({error:false, payload:users, msg:"add user"});
});

app.delete("/user", (req, res) => {
    let {email} = req.body;
    
    users = users.filter(user=>user.email !== email);
    
    res.json({error: false, payload:users, msg: "delete user"});
});


app.listen(5000, ()=>{
    console.log("start server");
});