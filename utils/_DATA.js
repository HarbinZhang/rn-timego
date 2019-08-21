

export const defaultIconList = ['working', 'study', 'game', 'gym', 'sleep', 'waste', 'more']
export const efficiencyNames = ['terrible', 'bad', 'okay', 'good', 'great', 'perfect']
export const defaultEventTypes = [0, 1, 2, 3, 4]

// we think things can be labeled in 5 types.
// I: important and urgent
// II: important but not urgent
// III: not important but urgent
// IV: not important or urgent
// V: relaxing, people recover from it
export const activityToEventType = {
  "working": 0,     // important and urgent
  "study": 1,       // important but not urgent
  "game": 4,        // not important or urgent
  "gym": 4,
  "sleep": 4,
  "waste": 3,
  "more": 2,        // not important but urgent
}

export const activityColorList = ['#FFCC99', '#99ccff', '#FFCCCC', '#CCCCCC', '#CCFFCC']