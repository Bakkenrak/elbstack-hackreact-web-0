import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { joinChat } from '../../redux/actions/chat'
import ChatMessage from '../elements/ChatMessage'
import styles from './Chat.scss'

@connect(
  state => ({
    sendbird: state.sendbird,
    channels: state.channels,
    messages: state.messages
  }),
  dispatch => ({
    joinChat: (channelId) => dispatch(joinChat(channelId))
  })
)
export default class Chat extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.joinChat(this.props.id)
  }

  componentWillUpdate(nextProps) {

    if (nextProps.id === this.props.id) {
      return
    }

    this.joinChat(nextProps.id || this.props.id)
  }

  joinChat(id) {
    const url = this.props.channels.list[id].channel_url

    console.log('joining ', url)
    this.props.joinChat(url)
  }

  renderMessages() {

    if (this.props.messages[this.props.id].length === 0) {
      return <div>no messages yet.</div>
    }

    return this.props.messages[this.props.id].map((item) => {
      return <ChatMessage item={item} key={item.msg_id} />
    })
  }

  render() {

    const content = this.props.id && this.props.messages[this.props.id] ?
      <div className={styles.messageList}>{this.renderMessages()}</div> :
      <div>loading messages</div>

    return content
  }
}
