// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const postSchema = new Schema({
//     // Content:{
//     //     type: String, 
//     //     required: true
//     // }
//     title: {type: String,
//         required: true,
//         index: true
//     },
//     content: {
//         type:String,
//         required: true
//     },

//     authorId: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'user', 
//         required: true
//     }
// })

// module.exports = mongoose.model('Post', postSchema)


const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, 
    required: true 
},
  Content: { type: String, 
    required: true 
},
//   authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('post', postSchema);