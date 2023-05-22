import express from 'express'
import {getRandomDoodleList} from './services/doodleService.js'
const app = express(); // create express app

app.get("/image", (req,res)=>{
   getRandomDoodleList().then(data=>{
      res.send(data);
   })
})

app.listen(3001, () => {
   console.log("server started on port 3001");
 });