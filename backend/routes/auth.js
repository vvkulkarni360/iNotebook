const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'iamvarun'

//ROUTE 1: create a user using POST:"/api/auth/createuser". does not require auth
router.post('/createuser', [
  body('name', 'enter a valid name').isLength({ min: 3 }),
  body('email', 'enter a valid email').isEmail(),
  body('password', 'enter a valid password').isLength({ min: 5 }),
], async (req, res) => {
  //if there are errors return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //check whether user with this email exits already
  try {

    let user = await User.findOne({ email: req.body.email })

    if (user) {   //if user=true(present)
      return res.status(400).json({ error: "sorry user with this email already exist " }) //furthur code will not be executed as it has got return
    }
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET)
    // console.log(jwtData)
    res.json({ authToken })

    // res.json(user)
  } catch (error) {     //error in creating user
    console.error(error.message)
    res.status(500).send("internal server error")
  }

})


//ROUTE 2:create a user using POST:"/api/auth/login". does not require auth

router.post('/login', [

  body('email', 'enter a valid email').isEmail(),
  body('password', 'password cannot be blank').exists()

], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "login using correct credentials" })
    }
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {   //password does not match
      return res.status(400).json({ error: "login using correct credentials" })
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET)
    res.json({ authToken })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("internal server error")
  }
})

//ROUTE 3:get logged in user details POST:"/api/auth/getuser". login required
router.post('/getuser',fetchuser, async (req, res) => {
try {
  userId=req.user.id
  const user=await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message)
  res.status(500).send("internal server error")
}
})
module.exports = router