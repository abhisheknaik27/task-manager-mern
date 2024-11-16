const router = require('express').Router();
const UserModel = require('../models/User');

//signin api
router.post('/signin', async(req, res) => {
    try{
        const username = req.body.username;
        const email = req.body.email;
        
        const existingUser = await UserModel.findOne({ username });
        const existingEmail = await UserModel.findOne({ email });
        
        if(existingUser){
            return res.status(400).json({
                msg: "UserName Already Exists"
            });
        } else if(username.length < 4){
            return res.status(400).json({
                msg: "Username should have atleast 4 characters"
            });
        }
        if(existingEmail){
            return res.status(400).json({
                msg: "Email Already Exists"
            });
        }
        
        await UserModel.create({
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(200).json({ msg: 'Signed in successfully'});
        
    }catch(err){
        console.log(err);
        res.status(400).json({
            msg: "Internal Server Error"
        });
    }

})

module.exports = router;