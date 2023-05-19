const express =require('express')
const router =express.  Router()

router.get('/',(req,res)=>{
    res.render('login');
    //render login component

})

router.post('/',(req,res)=>{

    console.log("Post Request")

    // Handle the login form submission
})

module.exports = router //TODO