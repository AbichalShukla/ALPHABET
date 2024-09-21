 
  const express=require("express")

const router = express.Router()



  const {userClass}=require("../Controller/Class")
  
 router.get("/class_data",userClass)



 
 exports.router=router