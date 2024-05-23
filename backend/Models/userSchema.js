import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const user = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique:true,
    } ,
    password: {
        type: String,
        require:true,
    },
    mobile: {
        type: Number,
        require: true,
    }

}, { timestamps: true })

user.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password=await  bcrypt.hash(this.password,salt)
})
const User = mongoose.model('User', user)

export default User;

