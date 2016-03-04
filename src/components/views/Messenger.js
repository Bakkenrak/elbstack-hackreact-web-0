import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../elements/Profile'
import ListChannelsBtn from '../elements/ListChannelsBtn'
import JoinedChannelList from '../elements/JoinedChannelList'
import ChannelList from '../containers/ChannelList'
import IntroText from '../elements/IntroText'
import Chat from '../containers/Chat'
import TeamLogo from '../elements/TeamLogo'
import styles from './Messenger.scss'

@connect(
  state => ({
    channels: state.channels,
    sendbird: state.sendbird
  })
)
export default class Messenger extends Component {

  state = {
    channelListOpen: false,
    activeChannelId: null
  }

  onOpenChannels() {
    this.setState({
      channelListOpen: !this.state.channelListOpen
    })
  }

  render() {

    const content = this.props.channels.activeChannelId ? <Chat id={this.props.channels.activeChannelId} /> : <IntroText />
    const channelList = this.state.channelListOpen ? <ChannelList /> : null

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <TeamLogo />
          <Profile username={this.props.sendbird.user_name} />
          <ListChannelsBtn onClick={this.onOpenChannels.bind(this)} />
          <JoinedChannelList />
        </div>
        <div className={styles.chat}>
          { channelList }
          { content }
        </div>
      </div>
    )
  }
}
