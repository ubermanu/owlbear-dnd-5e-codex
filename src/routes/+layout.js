import { obr } from '$lib/owlbear-sdk.js'
import { redirect } from '@sveltejs/kit'

export const load = async () => {
  const OBR = await obr()

  if (!OBR.isAvailable) {
    return
  }

  const role = await OBR.player.getRole()

  if (role !== 'GM') {
    throw redirect(301, '/restricted')
  }
}
