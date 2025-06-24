const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'post', 
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true
    }

})
module.exports = mongoose.model('comment', postSchema)

// export default mongoose.model('Comment', commentSchema)