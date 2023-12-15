import { API_URL } from '$lib/api.js'
import { error } from '@sveltejs/kit'

export const ssr = false

export const load = async ({ url, fetch }) => {
  const res = await fetch(API_URL.concat(url.pathname + url.search))
  const data = await res.json()

  if (data.error) {
    throw error(404, data.error)
  }

  return data
}
