import { SENDBIRD_JOIN_CHANNELS } from '../actionTypes'

export default function joinedChannels(state = [], action) {
  switch (action.type) {
    case SENDBIRD_JOIN_CHANNELS:

      if (state.indexOf(action.channelId) !== -1) {
        return state
      }

      return [
        ...state,
        action.channelId
      ]

    default:
      return state
  }
}
