import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels } from '../../redux/actions/channels'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  renderList() {

    const list = this.props.channels.list

    return Object.keys(list).map((id) =>
      <div key={id} className={styles.item}>
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
