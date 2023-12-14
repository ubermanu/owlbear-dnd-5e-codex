import Class from './views/Class.svelte'
import Debug from './views/Debug.svelte'
import Equipment from './views/Equipment.svelte'
import Skill from './views/Skill.svelte'
import Spell from './views/Spell.svelte'

const router = [
  {
    match: /^\/api\/skills\/.*/,
    component: Skill,
  },
  {
    match: /^\/api\/equipments\/.*/,
    component: Equipment,
  },
  {
    match: /^\/api\/spells\/.*/,
    component: Spell,
  },
  {
    match: /^\/api\/classes\/.*/,
    component: Class,
  },
]

/**
 * @param {string} url
 * @returns {SvelteComponent}
 */
export function view(url) {
  for (const route of router) {
    if (route.match.test(url)) {
      return route.component
    }
  }

  // TODO: 404 page
  return Debug
}
