 
  const express=require("express")
   const {StudentClassesName,Studentclassfirst,studentclasssecond}=require("../Controller/StudentClassName")



  const router = express.Router()



 router.get('/student_class_name/:id' ,StudentClassesName  )
 .get('/student_class_first/:id' ,Studentclassfirst  )
 .get('/student_class_second' ,studentclasssecond  )


   exports.router=router