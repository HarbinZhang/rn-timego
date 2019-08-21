import { AsyncStorage } from 'react-native'

export function fetchActivitySlots(activitySlotsTimeKey) {
  return AsyncStorage.getItem(activitySlotsTimeKey)
}

export function submitActivitySlot ( activitySlot, activitySlotsTimeKey ) {
  return AsyncStorage.mergeItem(activitySlotsTimeKey, JSON.stringify(
    activitySlot
  ))
}

export function removeActivitySlot ( activitySlotId, activitySlotsTimeKey ) {
  // TODO
  return AsyncStorage.getItem(activitySlotsTimeKey)
    .then((res) => {
      const data = JSON.parse(res)
      data[activitySlotId] = undefined
      delete data[activitySlotId]
      AsyncStorage.setItem(activitySlotsTimeKey, JSON.stringify(data))
    })
}

export function getAllActivitySlotsKeys() {
  return AsyncStorage.getAllKeys()
}
