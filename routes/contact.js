const router = require('express').Router();
router.get('/contact',(req,res)=>
{
    res.render('partials/main/contact');
});
module.exports = router;