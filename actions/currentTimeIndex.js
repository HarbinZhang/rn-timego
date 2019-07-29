export const SET_CURRENT_TIME_INDEX = 'SET_CURRENT_TIME_INDEX'

export function setCurrentTimeIndex (currentTimeIndex) {
	return {
		type: SET_CURRENT_TIME_INDEX,
		currentTimeIndex,
	}
}