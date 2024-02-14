const express=require('express');
const router = express.Router();
const JOb = require('../models/Job');

router.get('/test', (req,res)=>{
    res.send('Deu certo');
});


// add job via post
router.post('/add', (req,res)=>{
    let {title, salary, company, description, email, new_job}=req.body;

    // insert
    JOb.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(()=>{
        res.render('/');
    }).catch(err => {
        console.log(err);
    });
});