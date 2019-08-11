export const ADD_ACTIVITY_SLOT = 'ADD_ACTIVITY_SLOT'
export const REMOVE_ACTIVITY_SLOT = 'REMOVE_ACTIVITY_SLOT'
export const RECEIVE_ACTIVITY_SLOTS = 'RECEIVE_ACTIVITY_SLOTS'

export function addActivitySlot (activitySlot, activitySlotsTimeKey) {
	return {
		type: ADD_ACTIVITY_SLOT,
		activitySlot,
		activitySlotsTimeKey,
	}
}

export function removeActivitySlot (activitySlotId, activitySlotsTimeKey) {
	console.log(activitySlotsTimeKey)
	return {
		type: REMOVE_ACTIVITY_SLOT,
		activitySlotId,
		activitySlotsTimeKey,
	}
}

export function receiveActivitySlots (activitySlots) {
	return {
		type: RECEIVE_ACTIVITY_SLOTS,
		activitySlots,
	}
}