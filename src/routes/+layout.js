import { obr } from '$lib/owlbear-sdk.js'

export const load = async () => {
  const OBR = await obr()

  if (!OBR.isAvailable) {
    return
  }

  return {
    OBR,
  }
}
