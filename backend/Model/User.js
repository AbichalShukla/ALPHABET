  const mongoose = require ("mongoose")
   const {Schema} = mongoose

   const UserSchema=  new Schema ({
      email :{type:String , required:true},
      password:{type:String,required:true},
      resetPasswordToken: {type:String},
  resetPasswordExpires: Date,

      


   })
    exports. User= mongoose.model("User",UserSchema)
