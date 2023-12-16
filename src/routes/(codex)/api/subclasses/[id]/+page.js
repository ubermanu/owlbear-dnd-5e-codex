import { PUBLIC_API_URL } from '$env/static/public'

export const load = async ({ fetch, parent }) => {
  const data = await parent()

  const res = await fetch(PUBLIC_API_URL.concat(data.subclass_levels))
  const subclass_levels = await res.json()

  return {
    streamed: {
      subclass_levels,
    },
  }
}
