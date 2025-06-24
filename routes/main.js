const express = require('express');

const router = express.Router();
const Post = require('../models/post')

router.get(`/`, (req,res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "Simple blog created with Nodejs, express and mongodb"

        
    }
    res.send('server', locals)
})

function insertPostData(){
    Post.insertMany([
        {
           "title": "My Blog Post",
           "Content": "This is the actual post content."
        }

    ])
}
insertPostData();


//After commenting out the above data to mongodb
//How to retrive the data from mongodb

router.get('', async (req, res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "Simple blog created with Nodejs, express and mongodb"

    }
    try {
        const data = await Post.find();
        res.render('server',{locals, data})
    } catch (error) {
        console.log(error)
    }
})






module.exports = router;