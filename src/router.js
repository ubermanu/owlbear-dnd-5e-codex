import AbilityScore from './views/AbilityScore.svelte'
import Alignment from './views/Alignment.svelte'
import Background from './views/Background.svelte'
import Class from './views/Class.svelte'
import Condition from './views/Condition.svelte'
import DamageType from './views/DamageType.svelte'
import Debug from './views/Debug.svelte'
import Equipment from './views/Equipment.svelte'
import EquipmentCategory from './views/EquipmentCategory.svelte'
import Feat from './views/Feat.svelte'
import Feature from './views/Feature.svelte'
import Language from './views/Language.svelte'
import MagicItem from './views/MagicItem.svelte'
import MagicSchool from './views/MagicSchool.svelte'
import Monster from './views/Monster.svelte'
import Proficiency from './views/Proficiency.svelte'
import Rule from './views/Rule.svelte'
import RuleSection from './views/RuleSection.svelte'
import Skill from './views/Skill.svelte'
import Spell from './views/Spell.svelte'
import Subclass from './views/Subclass.svelte'
import Trait from './views/Trait.svelte'
import WeaponProperty from './views/WeaponProperty.svelte'

const router = [
  {
    match: /^\/api\/ability-scores\/.*/,
    component: AbilityScore,
  },
  {
    match: /^\/api\/alignments\/.*/,
    component: Alignment,
  },
  {
    match: /^\/api\/backgrounds\/.*/,
    component: Background,
  },
  {
    match: /^\/api\/classes\/.*/,
    component: Class,
  },
  {
    match: /^\/api\/conditions\/.*/,
    component: Condition,
  },
  {
    match: /^\/api\/damage-types\/.*/,
    component: DamageType,
  },
  {
    match: /^\/api\/equipment\/.*/,
    component: Equipment,
  },
  {
    match: /^\/api\/equipment-categories\/.*/,
    component: EquipmentCategory,
  },
  {
    match: /^\/api\/feats\/.*/,
    component: Feat,
  },
  {
    match: /^\/api\/features\/.*/,
    component: Feature,
  },
  {
    match: /^\/api\/languages\/.*/,
    component: Language,
  },
  {
    match: /^\/api\/magic-items\/.*/,
    component: MagicItem,
  },
  {
    match: /^\/api\/magic-schools\/.*/,
    component: MagicSchool,
  },
  {
    match: /^\/api\/monsters\/.*/,
    component: Monster,
  },
  {
    match: /^\/api\/proficiencies\/.*/,
    component: Proficiency,
  },
  {
    match: /^\/api\/rules\/.*/,
    component: Rule,
  },
  {
    match: /^\/api\/rule-sections\/.*/,
    component: RuleSection,
  },
  {
    match: /^\/api\/skills\/.*/,
    component: Skill,
  },
  {
    match: /^\/api\/spells\/.*/,
    component: Spell,
  },
  {
    match: /^\/api\/subclasses\/.*/,
    component: Subclass,
  },
  {
    match: /^\/api\/traits\/.*/,
    component: Trait,
  },
  {
    match: /^\/api\/weapon-properties\/.*/,
    component: WeaponProperty,
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
