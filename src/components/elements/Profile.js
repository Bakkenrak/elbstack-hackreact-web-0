import React, { PropTypes } from 'react'
import styles from './Profile.scss'
import { IndexLink } from 'react-router'

export default class Profile extends React.Component {

  static props = {
    username: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            { this.props.username }
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>
      </nav>
    )
  }
}
