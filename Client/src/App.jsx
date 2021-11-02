import React from "react";
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = 'wnfxtyv779wf';

const client= StreamChat.getInstance(apiKey)

const App = () => {
    return (
        <div className= "app__wrapper">
            <Chat client={client} theme ="team light">
                <ChannelListContainer
                
                />
                <ChanelContainer
                
                />
            </Chat>
        </div>
    );
}

export default App