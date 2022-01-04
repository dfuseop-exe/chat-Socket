//for Single Chat
const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
    chatName : {type: 'string' , trim: true},
    isGroupChat : {type: 'boolean' , default: false},
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }],
    letestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Message',
    },
    groupAdmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
},
    {
        timeStamp : true,
    }
)


const Chat = mongoose.model('Chat',chatModel);
module.exports = Chat;