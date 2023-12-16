// Preload the SDK on the client side, so that it's available
import OBR from '@owlbear-rodeo/sdk'

window.OBR = await new Promise((resolve) => {
  if (!OBR.isAvailable) {
    resolve({ isAvailable: false })
  } else if (OBR.isReady) {
    resolve(OBR)
  } else {
    OBR.onReady(() => resolve(OBR))
  }
})
