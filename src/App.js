import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import NewRoomForm from './components/NewRoomForm'
import RoomList from './components/RoomList'
import SendMessageForm from './components/SendMessageForm'
import MessageList from './components/MessageList'
import { tokenUrl, instanceLocator } from './config'



class App extends React.Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'arun',
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenUrl
        })
    })

    chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: '23599981',
                messageLimit: 10,
                hooks: {
                    onNewMessage: message => {
                      debugger;
                        console.log('message.text: ', message.text);
                    }
                }
            })
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList/>
                <MessageList/>
                <SendMessageForm/>
                <NewRoomForm/>
            </div>
        );
    }
}

export default App