// import package
const express = require('express');
const router = express.Router();

// ROUTES
// http://localhost:5000/login
// POST LOGIN
router.post('/', (req,res) => {
    // static data
    // username = gilliantuerah
    // password = pass
    if((req.body.username == 'gilliantuerah') && (req.body.password == 'pass')){
        res.status(200).json({error: [], message: 'success'});
    }else{
        res.status(400).json({error: "Bad Request", message: 'please enter a correct username and password'});
    }
})

module.exports = router;
