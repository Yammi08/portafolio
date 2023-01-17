const router = require('express').Router();
router.get('/',(req,res)=>
{
    res.render('partials/main/index');
});
module.exports = router;