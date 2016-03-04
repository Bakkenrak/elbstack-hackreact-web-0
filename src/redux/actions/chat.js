import sendbird from 'sendbird'
import { CHAT_CONNECTED } from '../actionTypes'

export function onMessageReceived(store) {
  return (data) => {
    store.dispatch({
      type: 'SENDBIRD_MESSAGE',
      payload: data
    })
  }
}

export function joinChat(channelUrl) {

  return (dispatch) => {
    sendbird.joinChannel(channelUrl, {
      successFunc: function successFunc2(data) {
        console.log('joinChannelSuccess', data)

        sendbird.connect({
          successFunc: function successFunc(data2) {
            console.log('connectSuccess', data2)

            sendbird.getMessageLoadMore({
              limit: 20,
              successFunc: function sf3(data3) {
                console.log(data3)

                dispatch({
                  type: CHAT_CONNECTED,
                  payload: {
                    channel_id: data.id,
                    messages: data3.messages
                  }
                })
              },
              errorFunc: function ef3(status, error) {
                console.log(status, error)
              }
            })
          },
          errorFunc: function errorFunc2(status, error) {
            console.log(status, error)
          }
        })
      },
      errorFunc: function errorFunc(status, error) {
        console.log(status, error)
      }
    })
  }
}
