const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(401).json({msg: 'No token, Authorization denied'});
    }

    try{
        jwt.verify(token, 'khs317', (err, decoded) => {
            if(err) {
                return res.status(401).json({msg: 'Token invalid'});
            }
            req.user = decoded.user;
            next();
        })
    } catch(e)
    {
        return res.status(500).json({msg: 'Server Error'})
    }
}