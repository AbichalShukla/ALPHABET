 const mongoose = require("mongoose")
 const {Schema} = mongoose

  const classSchema = new Schema({
      name: { type: String, required: true },
      image:{type:String,required:true},
      discription:{type:String,required:true},
      groupid:{type:String,required:true},
      status:{type:Boolean, required:true}
  })
   exports. classes = mongoose.model("classes",classSchema)