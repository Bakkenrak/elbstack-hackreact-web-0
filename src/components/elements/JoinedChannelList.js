import React, { Component } from 'react'
import styles from './JoinedChannelList.scss'
import { connect } from 'react-redux'

@connect(
  state => ({
    channels: state.channels,
    joinedChannels: state.joinedChannels
  })
)
export default class JoinedChannelList extends Component {

  renderList() {
    return this.props.joinedChannels.map((channelId) =>
      <div key={channelId}>
        {this.props.channels.list[channelId].name}
      </div>
    )
  }

  render() {

    const content = this.props.joinedChannels.length > 0 ? this.renderList() : <span>no joined channels</span>

    return (
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}
