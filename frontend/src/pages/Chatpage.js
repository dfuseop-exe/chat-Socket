import React, { useEffect, useState } from 'react'
const axios = require('axios');

const Chatpage = () => {
    const [chats, setchats] = useState([])

    const fetchChats =async ()=>{
        const {data} = await axios.get('/api/get');
        setchats(data);
    }

    useEffect(() => {
        fetchChats();
    }, [])

    return (
        <div>
            {
                chats.map((chat)=>{
                    return <div key={chat._id}>{chat.chatName}</div>   
                })
            }
        </div>
    )
}

export default Chatpage
