const mongoose=require('mongoose');
const adminSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String, // for admin login
});
const Admin=mongoose.model('admin',adminSchema);
module.exports=Admin;