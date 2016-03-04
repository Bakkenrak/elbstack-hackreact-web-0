import { CHAT_CONNECTED, EVENT_ON_MESSAGE_RECEIVED } from '../actionTypes'

function sortByTimestamp(messageA, messageB) {
  return messageA.ts > messageB.ts
}

export default function messages(state = {}, action) {

  switch (action.type) {

    case EVENT_ON_MESSAGE_RECEIVED:

      const message = action.payload

      // validate if message event
      if (!message || !message.msg_id) {
        return state
      }

      // find correct channel in state
      // create a new array to modify
      const messageList = state[message.channel_id].slice(0)

      // append to message list
      messageList.push(message)
      messageList.sort(sortByTimestamp)

      return {
        ...state,
        [message.channel_id]: messageList
      }

    case CHAT_CONNECTED:
      return {
        ...state,
        [action.payload.channel_id]: action.payload.messages.map((item) => {
          return item.payload
        }).sort(sortByTimestamp)
      }

    default:
      return state
  }
}
