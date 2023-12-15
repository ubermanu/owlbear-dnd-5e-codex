import { get } from 'svelte/store'
import { API_URL, fetchDnD } from './api.js'
import { page } from './stores.js'

/**
 * Jump to a page of the D&D API.
 *
 * @param {string} url
 */
export async function goto(url) {
  const $page = get(page)

  if (url === $page.url.pathname + $page.url.search) {
    return
  }

  if (url.length === 0) {
    page.set({ url: new URL(API_URL), data: {} })
    return
  }

  page.set({ url: new URL(API_URL.concat(url)), data: await fetchDnD(url) })
}
