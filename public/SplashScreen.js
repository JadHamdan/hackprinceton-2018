/*splash screen*/

import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import ChatScreen from './ChatScreen.js'

class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            roomID: '',
            roomName: '',
        }
        this.setCOMP202 = this.setCOMP202.bind(this);
        this.setLING330 = this.setLING330.bind(this);
        this.setMATH240 = this.setMATH240.bind(this);
        this.setPHYS131 = this.setPHYS131.bind(this);
    }

    /* jank alert: 4 different functions for 4 different chat rooms #doitforthedemo */
    setCOMP202() {
        this.setState({
            roomID: '19379357',
            roomName: 'COMP 202',
            submitted: true,
        })
    }
    setLING330() {
        this.setState({
            roomID: '19379350',
            roomName: 'LING 330',
            submitted: true,
        })
    }
    setMATH240() {
        this.setState({
            roomID: '19379349',
            roomName: 'MATH 240',
            submitted: true,
        })
    }
    setPHYS131() {
        this.setState({
            roomID: '19379358',
            roomName: 'PHYS 131',
            submitted: true,
        })
    }
    /* you can open your eyes now */


    render() {
        if (this.state.submitted === false) {
            return (
                <div>
                    <div>
                        <h2>Join a Chat Room</h2>
                        <ul>
                            <button onClick={this.setCOMP202}>COMP 202</button>
                            <button onClick={this.setLING330}>LING 330</button>
                            <button onClick={this.setMATH240}>MATH 240</button>
                            <button onClick={this.setPHYS131}>PHYS 131</button>
                        </ul>
                    </div>
                </div>
            )
        } else {
            console.log(this.props.name)
            return <ChatScreen
                       currentUsername={this.props.name}
                       currentRoomNumber={this.state.roomID}
                       currentRoomName={this.state.roomName}
                   />
        }

    }
}

export default SplashScreen
