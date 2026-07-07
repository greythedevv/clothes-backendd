const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const authSchema = mongoose.Schema({
          name:{
            type: String,
            required: true
          },
          email:{
            type: String,
            required: true,
            unique: true
          },
          password:{
            type: String,
            required: true
          }
},{
  timeStamp: true
})

authSchema.pre("save", async function (next){
  if(!this.isModified(password)) return next ()
  
    const salt = await bcrypt.genSalt(10)
    this.password = await  bcrypt.hash(this.password, salt)

} )

authSchema.methods.comparePasword =  async function(enteredPassword){
     return await bcrypt.compare(enteredPassword, this.password)
}

const Auth = mongoose.model("auth", authSchema)

module.exports = Auth