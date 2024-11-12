const Student = require('../models/studentModel');

module.exports = {

    // add student to the DB
    addstudent: async(req, res, next) =>{
   

      try{
        const student = new Student(req.body)
        const result = await student.save();
        res.send({message: "New Student added Successfully"})
      }catch (error) {
        console.log(error.message);
      }
},

    // get a list of students from the database 
    retrievestudents:async(req, res)=>{

        try {
            const student = await Student.find();
            res.send(student);
    
        } catch (error) {
             console.log(error.message);
        }
},

retrievestudentsById: async (req, res) => {
  try {
      const student = await Student.findById(req.params.id);
      if (!student) {
          return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
  } catch (error) {
      res.status(500).json({ message: 'Error retrieving student', error });
  }
},

    // delete a student from the DB
    deletestudent: async(req, res, next)=>{
        const id = req.params.id
        try {
         const student = await Student.findByIdAndDelete(id)
         res.send(student);
         
        } catch (error) {
     
         console.log(error.message)
        }
     
},

     // update students in the DB
    updatestudent: async(req, res, next)=>{
        const id = req.params.id
        try {`                                                                                                                                                                          `
        const id = req.params.id;
        const update = req.body;
        const options = {new: true}
        const result = await Student.findByIdAndUpdate(id, update, options)
        
        res.send(result);
    
        } catch (error) {
     
         console.log(error.message)
        }
     
}

}
