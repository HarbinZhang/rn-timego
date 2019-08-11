import { fetchActivitySlots, getAllActivitySlotsKeys } from '../utils/api'
import { receiveActivitySlots } from '../actions/activitySlot'


// return (dispatch) => {
//   dispatch(startLoading())
//   return getInitialData()
//     .then(({ retryItems, resendJobs }) => {
//       retryItems.json().then(function (res) {
//         dispatch(receiveRetryItems(res))
//       })
//       resendJobs.json().then(function (res) {
//         dispatch(receiveResendJobs(res))
//       })
//       // dispatch(setAuthedUser(AUTHED_ID))
//       dispatch(endLoading())
//     })
// }



export function handleInitialData(activitySlotsTimeKey) {
  return (dispatch) => {
    // dispatch(startLoading())
    return fetchActivitySlots(activitySlotsTimeKey)
      .then(activitySlots => {
        console.log(activitySlots)
        dispatch(receiveActivitySlots(JSON.parse(activitySlots)))
      })
  }
}

export function handleAllActivitySlotsKeys() {
  return (dispatch) => {
    return getAllActivitySlotsKeys()
      .then(keys => {
        console.log(keys)
      })
  }
}