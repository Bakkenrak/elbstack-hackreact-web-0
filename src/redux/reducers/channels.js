import { SENDBIRD_LIST_CHANNELS, SENDBIRD_JOIN_CHANNELS } from '../actionTypes'

export default function channels(state = {}, action) {
  switch (action.type) {
    case SENDBIRD_LIST_CHANNELS:
      return Object.assign(
        {},
        state,
        {
          page: action.data.page,
          next: action.data.next,
          list: action.data.channels.reduce((memo, channel)=> ({
            ...memo,
            [channel.id]: channel
          }), {})
        }
      )

    case SENDBIRD_JOIN_CHANNELS:
      return {
        ...state,
        activeChannelId: action.channelId
      }

    default:
      return state
  }
}
