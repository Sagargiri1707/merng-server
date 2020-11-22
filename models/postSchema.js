const { model, Schema } = require('mongoose')

const postSchema = new Schema({
    username: String,
    body: String,
    comments: [{
        body: String,
        username: String,
        createdAt:String
    }],
    likes: [{
        username: String,
        createdAt: String,
        
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref:"users"
    },
    createdAt: {
        type:String,
        default:new Date().toISOString()
    }
}
)

module.exports=model('Post',postSchema)