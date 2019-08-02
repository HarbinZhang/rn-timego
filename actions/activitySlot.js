export const ADD_ACTIVITY_SLOT = 'ADD_ACTIVITY_SLOT'
export const REMOVE_ACTIVITY_SLOT = 'REMOVE_ACTIVITY_SLOT'
export const RECEIVE_ACTIVITY_SLOTS = 'RECEIVE_ACTIVITY_SLOTS'

export function addActivitySlot (activitySlot) {
	return {
		type: ADD_ACTIVITY_SLOT,
		activitySlot,
	}
}

export function removeActivitySlot (activitySlotId) {
	return {
		type: REMOVE_ACTIVITY_SLOT,
		activitySlotId,
	}
}

export function receiveActivitySlots (activitySlots) {
	return {
		type: RECEIVE_ACTIVITY_SLOTS,
		activitySlots,
	}
}