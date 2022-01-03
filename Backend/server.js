const express = require('express');
const app = express();
const chats = require('./data/data')
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get('/', (req, res) => {
    res.send("Api is Working");
})

app.get('/api/get', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    const Singlechat =  chats.find((c) => c._id === req.params.id);
    res.send(Singlechat)
})



app.listen(PORT,()=>console.log("listening on port"));