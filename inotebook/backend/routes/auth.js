const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name","Enter valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
    body("email").isEmail(),
  ],
  async(req, res) => {
    //if there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check wether user with this email exists already
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry user with this email aready exists."})
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        
        res.json(user)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
  }
);

module.exports = router;