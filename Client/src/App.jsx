import React from "react";
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
//import { ChannelSearch } from "./components/ChannelSearch";

import './App.css';

//import { ChannelListcontainer, ChannelContainer } from './components';

const apiKey = 'wnfxtyv779wf';

const client= StreamChat.getInstance(apiKey)

const App = () => {
    return (
        <div className= "app__wrapper">
            <Chat client={client} theme ="team light">
                <ChannelListContainer
                
                />
                <ChannelContainer
                
                />
            </Chat>
        </div>
    );
}

export default App;