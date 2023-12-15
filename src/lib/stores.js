import { writable } from 'svelte/store'
import { API_URL } from './api.js'

export const page = writable({ url: new URL(API_URL), data: {} })
