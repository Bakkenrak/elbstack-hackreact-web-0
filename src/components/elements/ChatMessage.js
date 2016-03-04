import React, { Component, PropTypes } from 'react'
import styles from './ChatMessage.scss'

export default class ChatMessage extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={styles.message}><span className={styles.author}>{this.props.item.user.name}</span>: {this.props.item.message}</div>
    )
  }
}
