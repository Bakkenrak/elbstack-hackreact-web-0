import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import sendbird from './sendbird'
import language from './language'
import channels from './channels'
import joinedChannels from './joinedChannels'
import messages from './messages'

export default combineReducers({
  router,
  sendbird,
  channels,
  language,
  joinedChannels,
  messages
})
