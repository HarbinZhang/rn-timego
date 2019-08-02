import { AsyncStorage } from 'react-native'
import { ACTIVITY_SLOTS_KEY } from './_activitySlot'



export function fetchActivitySlots() {
  return AsyncStorage.getItem(ACTIVITY_SLOTS_KEY)
}

export function submitActivitySlot ( activitySlot ) {
  return AsyncStorage.mergeItem(ACTIVITY_SLOTS_KEY, JSON.stringify(
    activitySlot
  ))
}

export function removeActivitySlot ( activitySlotId ) {
  return AsyncStorage.getItem(ACTIVITY_SLOTS_KEY)
    .then((res) => {
      const data = JSON.parse(res)
      data[activitySlotId] = undefined
      delete data[activitySlotId]
      AsyncStorage.setItem(ACTIVITY_SLOTS_KEY, JSON.stringify(data))
    })
}