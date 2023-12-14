/** @param {string} path */
export async function fetchDnD(path) {
  const url = `https://www.dnd5eapi.co${path}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}

/** The categories of data available from the D&D API. */
export const categories = [
  { name: 'Ability Scores', url: '/api/ability-scores' },
  { name: 'Alignments', url: '/api/alignments' },
  { name: 'Backgrounds', url: '/api/backgrounds' },
  { name: 'Classes', url: '/api/classes' },
  { name: 'Conditions', url: '/api/conditions' },
  { name: 'Damage Types', url: '/api/damage-types' },
  { name: 'Equipment', url: '/api/equipment' },
  { name: 'Equipment Categories', url: '/api/equipment-categories' },
  { name: 'Feats', url: '/api/feats' },
  { name: 'Features', url: '/api/features' },
  { name: 'Languages', url: '/api/languages' },
  { name: 'Magic Items', url: '/api/magic-items' },
  { name: 'Magic Schools', url: '/api/magic-schools' },
  { name: 'Monsters', url: '/api/monsters' },
  { name: 'Proficiencies', url: '/api/proficiencies' },
  { name: 'Races', url: '/api/races' },
  { name: 'Rule Sections', url: '/api/rule-sections' },
  { name: 'Rules', url: '/api/rules' },
  { name: 'Skills', url: '/api/skills' },
  { name: 'Spells', url: '/api/spells' },
  { name: 'Subclasses', url: '/api/subclasses' },
  { name: 'Subraces', url: '/api/subraces' },
  { name: 'Traits', url: '/api/traits' },
  { name: 'Weapon Properties', url: '/api/weapon-properties' },
]
