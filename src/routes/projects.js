const router = require('express').Router();
const project = require('../models/project');
router.get('/projects',(req,res)=>
{

    const project0 = new project();
    const project1 = new project();
    
    project0.title = 'carlos';
    project1.title = 'matt';
    const projects = [];
    projects.push(project1);
    projects.push(project0.toJson());
    res.render('partials/main/projects',{projects});
});
module.exports = router;