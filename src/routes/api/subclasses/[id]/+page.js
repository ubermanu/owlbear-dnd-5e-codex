import { API_URL } from '$lib/api.js'

export const load = async ({ fetch, parent }) => {
  const data = await parent()

  const res = await fetch(API_URL.concat(data.subclass_levels))
  const subclass_levels = await res.json()

  return {
    streamed: {
      subclass_levels,
    },
  }
}
