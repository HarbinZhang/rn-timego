import { ADD_ACTIVITY_SLOT, REMOVE_ACTIVITY_SLOT } from '../actions/activitySlot'

export default function activitySlot (state = {}, action) {
	switch (action.type) {
		case ADD_ACTIVITY_SLOT:
			return {
				...action.activitySlot,
			}
		case REMOVE_ACTIVITY_SLOT:
			return {
				...state
			}
		default:
			return state
	}
}