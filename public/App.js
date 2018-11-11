import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'
import SplashScreen from './SplashScreen'

class App extends Component {
    constructor() {
        super()
        this.state = {
            currentUsername: '',
            currentRoomNumber: '',
            currentRoomName: '',
            currentScreen: 'WhatIsYourUsernameScreen',
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
    }

    onUsernameSubmitted(username) {
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
            .then(response => {
                this.setState({
                    currentUsername: username,
                    currentScreen: 'SplashScreen',
                })
            })
            .catch(error => console.error('error', error))
    }

    render() {
        if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
            return <UsernameForm onSubmit={this.onUsernameSubmitted} />
        }
        if (this.state.currentScreen === 'SplashScreen') {
            console.log(this.state.currentUsername)
            return <SplashScreen name={this.state.currentUsername} submitted={false}/>
        }
        if (this.state.currentScreen === 'ChatScreen') {
            return <ChatScreen
                       currentUsername={this.state.currentUsername}
                       currentRoomNumber={this.state.currentRoomNumber}
                       currentRoomName={this.state.currentRoomName}
                   />
        }
    }
}

export default App
