// we are using express for the routing
const express = require('express');

const ratelimit = require('express-rate-limit');
const studentRoute = require('./routes/studentRoute');
const courseRoute = require('./routes/courseRoute');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const { default: helmet } = require('helmet');
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();


app.use(helmet())
// limit request from some ip
const limiter = ratelimit({
    max: 2,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this ip, plz try again in an hour!",
});
app.use("/api", limiter);



app.use(cors({
    credentials: true,  // Allow credentials
    origin:[
        'http://localhost:3000' // React
    
    ]
}));

// Use your routes here
app.use(express.json());
app.use("/api" ,studentRoute);
app.use(courseRoute);
app.use(userRoute);



// Handling 404 error
app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
});

// Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});

// setting up a server
app.listen(process.env.PORT || 4000, function(){
    console.log('Now listening for requests on: http://localhost:4000')
});


                                                                                                                