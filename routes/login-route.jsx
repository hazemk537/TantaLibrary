const express =reqiure('express')
const router =express.router()

router.get('/',(req,res)=>{
    res.render('login');

})

router.Post('/',(req,res)=>{

    // Handle the login form submission
})

module.exports = router //TODO