const express =reqiure('express')
const router =express.router()

router.get('/',(req,res)=>{
    res.render('Register');

})

router.Post('/',(req,res)=>{

    // Handle the Register-up form submission
})

module.exports = router //TODO