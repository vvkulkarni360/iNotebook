const jwt = require('jsonwebtoken');
const JWT_SECRET = 'iamvarun'

const fetchuser = (req, res, next) => {
    // get user from jwt token and add id to req object
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "auth using valid token1" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)        
        req.user = data.user
        next()
    } catch (error) {
        // res.status(401).send({ error: "auth using valid token2" })
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({ error: 'Authorization failed: Token expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).send({ error: 'Authorization failed: Invalid token' });
        } else {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    }

}

module.exports = fetchuser