import Contact from "../models/contactModal.js";
export const createContact=async(req,res)=>{
    try{
const{names,email,date,subject,message,phone}=req.body;
const newContact=new Contact({names,email,date,subject,message,phone});
await newContact.save();
res.status(201).json({success: true,message: "update created successfully",Contact: newContact});

    }catch(error){
        res.status(500).json({success: false,message: "Server Error",error: error.message});

    }
}

// export const ListContact=async(req,res)=>
// {
//     try{
//     const foundContact= await Contact.find();
//     return res.status(200).json(
//         {
//             foundContact
//         }
//     )}
//     catch(error)
//     {
//         res.status(500).json({success:false,
//             message:"Server Error",
//             error:error.message
//         })
//     }
// }

// export const FindContactById=async(req,res)=>
// {
//     try{
//     const id=req.params.id;
//     const foundContactId=await Contact.findById(id)
//     if(!foundContactId)
//     {
//         res.status(404).json({
//             message:"Message Not found",
//         })
//     }
//     return res.status(200).json({
//         contact:foundContactId
//     })
// }
// catch(error)
// {
//     res.status(500).json({

//         message:"Internal server Error",
//         error:error.message
//     })
// }
// }

// export const DeleteByID =async(req,res)=>{
//     try{
//         const id=req.params.id
//         const deleteContactbyID=await Contact.findByIdAndDelete(id)
//         if (!deleteContactbyID){
//             res.status(404).json({
//             message:"not found"
//         })
//         }
//         return res.status(200).json({
//         deleteContactbyID
//     })

//     }
//     catch(error){
//         return res.status(500).json({
//             message:"Internal Server Error",
//             error:error.message,
//         })

//     }

// }

// export const getAllContact=async(req,res)=>{
//     try{
//         const contacts= await Contact.find();
//         res.status(200).json({success:true,contacts})
//     }
//     catch(error)
//     {
//         res.status(500).json({success: false,message: "Server Error",error: error.message});
        
//     }
// }
// export const deleteContact = async(req,res)=>{
//     try{
//         const {id}=req.params.id;
//         const contacts=await Contact.findById(id);
//         if(!contacts){
//             return res.status(404).json({success:false,message:"contact not found"});
//         }
//         res.status(200).json({success:true,contacts});
//     }
//     catch{
//         res.status(500).json({success:false,message:"server error",error:error.message});
//     }
// }
 
// export const deleteContactById=async(req,res)=>{
//     try{
//       const {id} =req.params;
//       const contact = await Contact.findByIdAndDelete(id);
//       if(!contact){
//         return res.status(404).json({ success: false, message: "Contact not found"});
//        }
//        res.status(200).json({ success: true, message: "Contact deleted successfull"});
//     }catch(error){
//      res.status(500).json({ success: false, message: "server Error", error: error.message});
//     }
//   }
//   export const updateContactById=async(req,res)=>{
//     try{
//        const{id}=req.params;
//        const updatedData= await Contact.findByIdAndUpdate(id,req.body);
//        if(!updatedData){
//         return res.status(404).json({ success: false, message: "Contact not found"});
//     }
//     res.status(200).json({ success: true, message: "Contact deleted successfull",updatedData});
//     }
//     catch(error)
//     {
//         res.status(500).json({ success: false, message: "server Error", error: error.message});
//     }
//     }

//     export const getContactById=async(req,res)=>{
//         try{
//            const {id}= req.params;
//            const contacts=await Contact.findById(id);
//             if(!contacts){
//              return res.status(404).json({ success: false, message: "Contact not foundr"});
//             }
//             res.status(200).json({ success: true, contacts});
//         } catch(error){
//            res.status(500).json({ success: false, message: "server Error", error: error.message});
//        }
//      }