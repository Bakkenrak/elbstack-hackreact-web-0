import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels, joinChannel } from '../../redux/actions/channels'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels()),
    joinChannel: (channelId) => dispatch(joinChannel(channelId))
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  onJoin(channelId) {
    this.props.joinChannel(channelId)
  }

  renderList() {

    const list = this.props.channels.list

    return Object.keys(list).map((id) =>
      <div key={id} className={styles.item} onClick={this.onJoin.bind(this, id)}>
        {list[id].name}
      </div>
    )
  }

  render() {

    const content = this.props.channels.list ? this.renderList() : <p className="text-center">loading channels</p>

    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {content}
        </div>
      </div>
    )
  }
}
