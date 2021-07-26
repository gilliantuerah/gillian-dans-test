// import package
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// ROUTES
// http://localhost:5000/position
// get from http://dev3.dansmultipro.co.id/api/recruitment/positions.json
// get position
router.get('/', async (req,res) => {
    const description = req.query.description? req.query.description : '';
    const location = req.query.location? req.query.location : '';
    const fulltime = req.query.full_time? req.query.full_time : false;
    try{
        const api_url = `${process.env.BASE_URL}/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;
        const response = await fetch(api_url);
        const json = await response.json();
        res.status(200).json(json);
    }catch(err){
        res.status(400).json({message: err});
    }
})

// http://localhost:5000/position/:id
// get from http://dev3.dansmultipro.co.id/api/recruitment/positions/{ID}
// get position by id
router.get('/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const api_url = `${process.env.BASE_URL}/positions/${id}`;
        console.log(api_url)
        const response = await fetch(api_url);
        const json = await response.json();
        res.status(200).json(json);
    }catch(err){
        res.status(400).json({message: err});
    }
})

module.exports = router;
