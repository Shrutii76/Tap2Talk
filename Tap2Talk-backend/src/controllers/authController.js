const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{
    const { name,email,password } = req.body;
 
    //validation
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields required"});
    }

    //check existing user
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already exists"});
    }

    //hash password 
    const hashedPassword = await bcrypt.hash(password,10);

    //create user
    const user = await User.create({
        name,email,password:hashedPassword
    });

    res.status(201).json({
        message:"User registered successfully",
    })
}

exports.login = async (req,res)=>{
 const {email,password} = req.body;

//check user
const user = await User.findOne({ email });
if (!user) {
  return res.status(400).json({ message: "Invalid credentials" });
}

//compare password 
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
    return res.status(400).json({
        message:"Invalid credentials"
    });
}

//generate token
const token = jwt.sign(
    {userId:user.id},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
);

res.json({
    token,
    user:{
        id: user._id,
        name: user.name,
        email: user.email
    }
})

}