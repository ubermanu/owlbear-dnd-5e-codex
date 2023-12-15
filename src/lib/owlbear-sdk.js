import { browser } from '$app/environment'

/**
 * Returns a ready OwlBear Rodeo SDK instance.
 *
 * @returns {Promise<import('@owlbear-rodeo/sdk').default>}
 */
export async function obr() {
  if (!browser) {
    return { isAvailable: false }
  }

  const OBR = (await import('@owlbear-rodeo/sdk')).default

  await new Promise((resolve) => {
    if (!OBR.isAvailable) {
      resolve()
    } else if (OBR.isReady) {
      resolve()
    } else {
      OBR.onReady(() => resolve())
    }
  })

  return OBR
}
