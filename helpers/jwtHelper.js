const JWT = require("jsonwebtoken");
const createError = require("http-errors");


module.exports = {
    signAccessToken:(UserId)=>{
        return new Promise((resolve, reject)=>{
            const payload ={}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: "10m",
                issuer: "njauTechnologies.com",
                audience: UserId,
            }
            JWT.sign(payload, secret, options, (error, token)=>{
                if(error) reject(error);
                resolve(token);
            })
        })
    },

    // middlware to verify accesstoken
    verifyAccessToken: (req, res, next)=>{
        if(!req.headers["authoriztion"]) return next(createError.Unauthorized());
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return next(createError.Unauthorized())
            }
            req.payload = payload;
            next()
      })
    }
}

