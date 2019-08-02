import { ADD_ACTIVITY_SLOT, REMOVE_ACTIVITY_SLOT, RECEIVE_ACTIVITY_SLOTS } from '../actions/activitySlot'
import { submitActivitySlot, removeActivitySlot } from '../utils/api'

export default function activitySlots (state = {}, action) {
	switch (action.type) {
		case ADD_ACTIVITY_SLOT:
			submitActivitySlot(action.activitySlot)
			return {
				...state,
				...action.activitySlot,
			}
		case REMOVE_ACTIVITY_SLOT:
			const key = action.activitySlotId
			removeActivitySlot(key)
			state[key] = undefined
			delete state[key]
			return {
				...state
			}
			
		case RECEIVE_ACTIVITY_SLOTS:
			return {
				...action.activitySlots
			}
		default:
			return state
	}
}