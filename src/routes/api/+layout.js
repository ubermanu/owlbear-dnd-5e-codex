import { error } from '@sveltejs/kit'

export const load = async ({ url, fetch }) => {
  let resource = await fetch(
    `https://www.dnd5eapi.co${url.pathname}${url.search}`
  )
  resource = await resource.json()

  if (resource.error) {
    throw error(404, resource.error)
  }

  return resource
}
