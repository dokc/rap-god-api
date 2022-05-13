var models = require("express-cassandra")
import { uuidFromString } from "express-cassandra"
import express from "express"
import { Router } from "express"

let login_router = Router()



login_router.post("/login", async (req,res) => {

        const {email,password} = req.body;

        if(!(email && password)){
            res.status(400).json({msg:"All input are required"})
        }

        const user = await models.instance.users.find({email});

        if(user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                {user_id : user._id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn:"5h",
                }
            );

            user.token = token;

            return res.status(200).json(user);
        }

        return res.status(400).json({msg:"Invalid Credentials"});

    }
);

export default login_router
