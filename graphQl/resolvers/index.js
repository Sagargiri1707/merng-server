const comments = require('./comments')
const PostResolver = require('./post')
const UsersResolver = require('./users')

module.exports = {
    Post: {
        likeCount: (parent) => {
            return parent.likes.length
        },
        commentCount: (parent) => {
            return parent.comments.length
        },
    },
    Query: {
        ...PostResolver.Query,
     },
    Mutation: {
        ...comments.Mutation,
        ...UsersResolver.Mutation,
        ...PostResolver.Mutation

    },
    Subscription: {
        ...PostResolver.Subscription
    }
}