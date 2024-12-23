var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ankitaisagooddev'

const fetchuser = (req, res, next)=>{
    //Get user from JWT token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        console.log("User data from token: ", req.user);
        next();
    }catch(error){
        res.status(401).send({error: "Please authenticate using valid token"})
    }
}

module.exports = fetchuser;