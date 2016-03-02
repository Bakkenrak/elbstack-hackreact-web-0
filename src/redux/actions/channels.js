import { SENDBIRD_LIST_CHANNELS, SENDBIRD_LIST_CHANNELS_ERROR, SENDBIRD_JOIN_CHANNELS } from '../actionTypes'
import sendbird from 'sendbird'

export function listChannels() {
  const page = 1
  const limit = 20

  return dispatch => {
    sendbird.getChannelList({
      page: page,
      limit: limit,
      successFunc: function successFunc(data) {
        dispatch({
          type: SENDBIRD_LIST_CHANNELS,
          data: data
        })
      },
      errorFunc: function errorFunc(status, error) {
        dispatch({
          type: SENDBIRD_LIST_CHANNELS_ERROR,
          status: status,
          error: error
        })
      }
    })
  }
}

export function joinChannel(channelId) {
  return {
    type: SENDBIRD_JOIN_CHANNELS,
    channelId: channelId
  }
}
