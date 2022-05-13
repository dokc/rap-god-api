var models = require("express-cassandra")
import { uuidFromString } from "express-cassandra"
import express from "express"
import { Router } from "express"

let register_router = Router()


register_router.post("/register" ,async (req,res) => {
    try{
        const {firstName, lastName, email, password } = req.body;

        if ( !(email && password && firstName && lastName)){
            res.status(400).json({msg:"All input are required"});
        }

        const oldUser = await models.instance.users.find({email});

        if(oldUser){
            return res.status(409).json({msg:"User Already Exist. Please Login"});
        }

        encryptedUserPasswd = await bcrypt.hash(password,10);

        const user = await new models.instance.users({
            first_name:firstName,
            last_name:lastName,
            email:email.toLowerCase(),
            password:encryptedUserPasswd,
        });

        // Create jwt token
        const token = jwt.sign(
            {user_id:user._id,email},
            process.env.TOKEN_KEY,
            {
                expiresIn : "5h",
            }   
        );

        // save user token
        user.token = token;

        res.status(201).json(user);
    }catch(err){
        console.log(err);
    }
});

export default register_router
