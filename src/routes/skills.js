const router = require('express').Router();
router.get('/skills',(req,res)=>
{
    res.render('partials/main/skills');
});
module.exports = router;