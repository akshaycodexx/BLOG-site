const express=require("express")
const app=express();
const port=8002;
//this is used to insilize the paths
const path =require("path")

//this is used for fethed auto random id`s
const {v4:uuidv4}=require(`uuid`)

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));

//this is help to used public folder as a css
app.use(express.static(path.join(__dirname,"public")))

//to understand the post request
app.use(express.urlencoded({extended:true}))

//use method overriging it is help to revome redundancy

const methodoverride=require('method-override');
app.use(methodoverride(`_method`))



let posts=[
    {
        id: uuidv4(),
        username: "Akshaycodex",
        content: "Hello! I'm Akshay, passionate about coding and tech."
    },
    {
        id: uuidv4(),
        username: "codinghub",
        content: "Welcome to CodingHub! A place for self-learners to grow together."
    },
    {
        id: uuidv4(),
        username: "techwizard",
        content: "Exploring the fascinating world of technology and innovation."
    },


]


//first page
app.get("/",(req,res)=>{
    res.render("wellcome.ejs")
})
//all post page
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

//add a new post 

//step 1: Goes to the new page
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
//step 2: Add new post working
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id =uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts")
})


// Edit the specific post

// Step 1: Goes to the edit page for a specific post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (post) {
        res.render("edit.ejs", { post }); // Pass the post object to the template
    } else {
        res.send("Post not found"); // Handle the case where the post is not found
    }
});

//step 2: udate the old posts into the new
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
   let post=posts.find((p)=> id === p.id);
    let newContent=req.body.content;

    post.content=newContent;
    // res.send("Patch requesting working")
    res.redirect("/posts")
})


//Delete the post

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => p.id !== id);  // Keep posts where ID doesn't match
    res.redirect("/posts");
});














































app.listen(port,()=>{
    console.log("server Started ")
})

