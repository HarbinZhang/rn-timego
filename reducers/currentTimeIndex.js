import {SET_CURRENT_TIME_INDEX} from '../actions/currentTimeIndex'

export default function currentTimeIndex (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_TIME_INDEX:
			return {
				...state,
				...action.currentTimeIndex,
			}
		default:
			return state
	}
}