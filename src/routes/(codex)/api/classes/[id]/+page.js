import { PUBLIC_API_URL } from '$env/static/public'

export const load = async ({ fetch, parent }) => {
  const data = await parent()

  const res = await fetch(PUBLIC_API_URL.concat(data.class_levels))
  const class_levels = await res.json()

  return {
    streamed: {
      class_levels,
    },
  }
}
