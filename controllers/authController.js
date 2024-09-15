const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    console.log("body",req)
    try{
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User Already Exists"})
        } else{
            user = new User({
                username: username,
                email: email,
                password: password
            })
            console.log("user", user)
            await user.save()

            const payload = {
                user: {
                    id: user.id
                }
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
            console.log(token)
            res.json({token})
        }
    } catch(ex){
        console.log(ex.message)
        return res.status(500).send("Server Error")
    }
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body
    console.log("body", req.body)
    try{
        let user = await User.findOne({email})
        console.log("user",user)
        if(!user){
            return res.status(404).json({message: "Invalid Credentials"})
        } else{
            const pwdMatch = await user.comparePassword(password)
            if(!pwdMatch){
                return res.status(404).json({message: "Invalid Credentials"})
            } else{
                const payload = {
                    user: {
                        id: user.id
                    }
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
                return res.json('token')
            }
        }
    } catch(ex){
        console.log(ex.message)
        return res.status(500).send("Server Error")
    }
}