const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000 
const clothesRoutes = require("./src/routes/clothesRoutes")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use("/api/clothes", clothesRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log('Database Connected!')
   app.listen(PORT, ()=>{
      console.log(`app running on port ${PORT}`)
   })

  })
  .catch((err)=>{
    console.log(err.message)
  })