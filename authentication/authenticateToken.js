const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const secretKey = process.env.JWT_SECRET

function authenticateToken(req, res, next){
    const authHeaders = req.headers['token']
    const token = authHeaders && authHeaders.split(' ')[1]
    console.log(authHeaders, '\n',`token: ${token}`)
    if(token == null)
        return res.status(401).send('Unauthorized')

    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            console.log(err)
            res.status(403).send('Forbidden')
        } else{
            req.user = user;
            next()
        }
    })

}

module.exports = authenticateToken