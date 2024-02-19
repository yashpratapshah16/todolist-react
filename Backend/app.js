require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors=require("cors");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.DB);

const listSechema = new mongoose.Schema({
  note: String,
});

const List = mongoose.model("List", listSechema);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app
    .route("/lists")
    .get((req,res) => {
        const lists=async()=>{
            const list= await List.find({});
            res.send(list);
        }
        lists();
    })
    .post((req,res)=>{
        const newitem=new List(req.body)
        newitem.save();
        res.send("Item Added!")
    })

app.delete("/lists/:id",(req,res)=>{
    const remove=async ()=>{
        await List.deleteOne({_id:req.params.id});
        res.send("Deleted!");
    }
    remove();
})


app.listen(PORT, () => {
  console.log("Server started!");
});
