
export const ADD_ACTIVITY_SLOT = 'ADD_ACTIVITY_SLOT'
export const REMOVE_ACTIVITY_SLOT = 'REMOVE_ACTIVITY_SLOT'

export function addActivitySlot (activitySlot) {
	return {
		type: ADD_ACTIVITY_SLOT,
		activitySlot,
	}
}

export function removeActivitySlot (activitySlot) {
	return {
		type: REMOVE_ACTIVITY_SLOT,
		activitySlot,
	}
}