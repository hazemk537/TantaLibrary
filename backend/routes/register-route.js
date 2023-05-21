const express =require('express')
const router =express.Router()

router.get('/',(req,res)=>{
    res.render('Register');
    //render register component

})

router.post('/',(req,res)=>{

    // Handle the Register-up form submission
})

module.exports = router //TODO