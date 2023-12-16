// Preload the SDK on the client side, so that it's available
import OBR from '@owlbear-rodeo/sdk'

await new Promise((resolve) => {
  if (!OBR.isAvailable) {
    resolve()
  } else if (OBR.isReady) {
    resolve()
  } else {
    OBR.onReady(() => resolve())
  }
})

console.log('OBR is ready on the client side')
window.OBR = OBR
