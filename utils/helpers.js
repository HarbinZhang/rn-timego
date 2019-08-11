

export function timeToString(time = Date.now()) {
  const date = new Date(time)
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
}

export function generateTimeKey() {
  return new Date().getTime();
}


export function headerTitleToTimeKey(prefix, headerTitle) {
  switch (headerTitle) {
    case 'Today':
      return prefix + timeToString()
    case 'Yesterday':
      return prefix + timeToString(Date.now() - 86400000)
    default:
      return ""
  }
}