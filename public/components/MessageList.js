import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MessageList extends Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        const styles = {
            container: {
                overflowY: 'scroll',
                flex: 1,
            },
            ul: {
                listStyle: 'none',
            },
            li: {
                marginTop: 13,
                marginBottom: 13,
            },
            senderUsername: {
                fontWeight: 'bold',
            },
            message: { fontSize: 15 },
        }
        return (
            <div style={styles.container}>
                <ul style={styles.ul}>
                    {this.props.messages.map((message, index) => (
                        <li key={index} style={styles.li}>
                            <div>
                                <span style={styles.senderUsername}>{message.senderId}</span>{' '}
                            </div>
                            <p style={styles.message}>{message.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MessageList
