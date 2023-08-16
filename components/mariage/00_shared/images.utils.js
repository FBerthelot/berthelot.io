export const isImageLoaded = (src) => {
  return new Promise((resolve, reject) => {
    let isTimeouted = false
    const timeout = setTimeout(() => {
      isTimeouted = true
      resolve()
    }, 20000)
    const image = document.createElement('img')
    image.onload = () => {
      if (!isTimeouted) {
        resolve()
        clearTimeout(timeout)
      }
    }
    image.onerror = (err) => {
      reject(err)
    }
    image.src = src
  })
}
