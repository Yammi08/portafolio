const router = require('express').Router();
const project = require('../models/project');
router.get('/projects',(req,res)=>
{
    const projects = [];
    res.render('partials/main/projects',{projects});
});
module.exports = router;