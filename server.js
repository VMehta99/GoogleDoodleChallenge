import express from 'express'
import {getRandomDoodleList} from './services/doodleService.js'
const app = express(); // create express app

app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/image", (req,res)=>{
   getRandomDoodleList().then(data=>{
      res.send(data);
   })
})

// Anything that doesn't match the above, send back the index.html file
// app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname + '/client/build/index.html'))
//  })

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})