import React from 'react';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import MessageList from './components/MessageList';

class App extends React.Component {
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