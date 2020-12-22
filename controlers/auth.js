
const User = require('../models/user');
const env = require ('dotenv');
const jwt = require('jsonwebtoken');


    exports.signup=(req,res)=>{
        User.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(user) return res.json({
                message:'Email already exist'
            });
    
            const {
    firstName,
    lastName,
    email,
    password
    
    
            }=req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password ,
                username:Math.random().toString(),
                role:'user'
            });
            _user.save((error,data)=>{
                if(error){
                    console.log(error)
                    return res.json({
                        message:'something went wrong'
                    });
                }
                if(data){
                    return res.status(201).json({
                        message:"User Created Successfully"
                    })
                }
            })
        });
    
    
    }

    exports.signin= (req,res)=>{
        User.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(error) return res.status(400).json({error});
            if(user){
                if(user.authenticate(req.body.password)){
                        const token = jwt.sign({_id:user._id},'zain',{expiresIn:'1h'});
                    const {firstName,lastName,email,fullName}=user;
                    res.status(200).json({
                        token,
                        user:{
                            firstName,lastName,email,fullName
                        }
                    });
                    }else{
                        return res.status(400).json({
                            message:'invalid password'
                        })
                    }

            }
            else{
                return res.status(400).json({message:'something went wrong'});
            }
        })

       
    }
    exports.requireSignin=(req,res,next)=>{
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token,'zain');
        req.user=user;
        next();
       
    }