export default function tapUp(onData, onError, onCompletion) {
  return source => (start, sink) => {
    if (start !== 0) return
    let talkback
    source(0, (type, data) => {
      if (type !== 0) {
        talkback(type, data)
        return
      }

      talkback = data

      sink(0, (type, data) => {
        if (type === 1) {
          onData(data)
        } else if (type === 2) {
          if (data) {
            if (onError) {
              onError(data)
            }
          } else if (onCompletion) {
            onCompletion()
          }
        }
        talkback(type, data)
      })
    })
  }
}
