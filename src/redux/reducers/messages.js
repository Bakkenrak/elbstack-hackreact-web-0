import { CHAT_CONNECTED } from '../actionTypes'

export default function messages(state = {}, action) {

  switch (action.type) {

    case CHAT_CONNECTED:
      return {
        ...state,
        [action.payload.channel_id]: action.payload.messages.map((item) => {
          return item.payload
        })
      }

    default:
      return state
  }
}
