

const express = require("express");
const con = require("./config");
const {v4 : uuidv4} = require('uuid')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// GET ALL ITEMS LIST API
app.get("/", (req, resp) => {
  con.query(`select * from restaurant.items_list`, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

// GET SPECIFIC ITEM API
app.get("/admin/items/:itemId/", (req, resp) => {
  const {itemId} = req.params;
  console.log(itemId);

  con.query(`select * from restaurant.items_list where id = '${itemId}' `, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



// CREATE NEW ITEM REQUEST API with POST Request
app.post("/admin/items/add/item", jsonParser, (req,res)=>{
  console.log(req.body);
  res.send(req.body);
  const {name, cost, rating, imageurl, foodtype} = req.body;
  console.log(name, cost, rating, imageurl,  foodtype);
  // let sql = "INSERT INTO restaurant.items_list (name, cost, food_type, image_url, rating) VALUES (name, cost, foottype, imageurl, rating)";
  
  const id = uuidv4();
  
  
   con.query(`insert into restaurant.items_list (id, name, cost, food_type, image_url, rating) values ('${id}', '${name}', ${cost}, '${foodtype}', '${imageurl}', ${rating})`, function (err, result) {
  // con.query(`insert into restaurant.items_list (id, name, cost, food_type, image_url, rating) values (14, 'Biyani', 200, 'VEG', 'bhjbjhdvjs', 3)`, function (err, result) {
  
    if (err) throw err;
    console.log("1 record inserted");
  });

  

// con.query(`INSERT INTO restaurant.items_list VALUES (name, cost, foottype, imageurl, rating)`, (err, result) => {
   
//   con.query(`insert into restaurant.items_list (name, cost, food_type, image_url, rating) values (name, cost, foottype, imageurl, rating)`, (err, result) => {
//      if (err) { res.send("error in api") }
//     else { res.send(result) }
//   })

  
})


// UPDATING SPECIFIC ITEM DETAILS with PUT Request
app.put("/admin/items/:itemId/", jsonParser, (req,res)=>{
  const {itemId} = req.params;
  // console.log('itemId',itemId);
  // console.log('body',req.body);
  // console.log('req',req);
  // console.log(req.body);
  // res.send(req.body);
  const { id, name, cost, rating, image_url, food_type} = req.body;
  console.log(id, name, cost, rating, image_url,  food_type);
  

  
   con.query(`update restaurant.items_list set name = '${name}', cost = ${cost}, image_url = '${image_url}' where id = '${id}'` , function (err, result) {
    // con.query(`update set restaurant.items_list id = '${id}', name = '${name}', cost = ${cost}, food_type ='${food_type}', image_url = '${image_url}', rating = ${rating})`, function (err, result) {
  
    if (err) throw err;
    console.log("1 record Updated");

    // if (err)  { res.send("error in api"),
    // console.log(err);
    //  }
    // else { res.send(result),
    //   console.log("1 record Updated"); }
  });

 
  
})




// DELETING SPECIFIC ITEM DETAILS with DELETE Request
app.delete("/admin/items/:itemId/", (req, resp) => {
  const {itemId} = req.params;
  console.log(itemId);

  con.query(`delete from restaurant.items_list where id = ${itemId} `, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



// GET SPECIFIC USERS API
app.get("/users/", (req, resp) => {
  con.query(`select * from restaurant.users`, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});


app.post("/login/",  (req, res)=>{
  const { name, password } = req.body;

  console.log(req.body)
  

  
})





app.listen("5000")