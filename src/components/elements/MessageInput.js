import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './MessageInput.scss'
import { sendMessageToChannel } from '../../redux/actions/chat'

@connect(
  null,
  { sendMessageToChannel }
)
export default class MessageInput extends Component {

  state = {
    messageContent: null
  }

  onChange(event) {
    this.setState({
      messageContent: event.target.value
    })
  }

  onKeyPress(event) {
    // 13 = Enter
    if (event.charCode === 13) {
      this.onSend()
    }
  }

  onSend() {
    if (this.state.messageContent && this.state.messageContent.length) {
      this.props.sendMessageToChannel(this.state.messageContent)
      this.setState({
        messageContent: null
      })
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <input className={styles.input} type="text" placeholder="Write a message" onKeyPress={this.onKeyPress.bind(this)} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}
