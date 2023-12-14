import { get } from 'svelte/store'
import { fetchDnD } from './api.js'
import { page } from './stores.js'

/**
 * Jump to a page of the D&D API.
 *
 * @param {string} url
 */
export async function goto(url) {
  if (url === get(page).url) {
    return
  }

  if (url.length === 0) {
    page.set({ url: '', data: {} })
    return
  }

  page.set({ url, data: await fetchDnD(url) })
}
