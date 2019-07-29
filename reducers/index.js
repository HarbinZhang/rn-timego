import { combineReducers } from 'redux'
import activitySlots from './activitySlots'
import currentTimeIndex from './currentTimeIndex'

export default combineReducers({
	activitySlots,
	currentTimeIndex,
})