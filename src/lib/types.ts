interface Resource {
  index: string
  name: string
  url: string
}

export interface AbilityScore {
  index: string
  name: string
  full_name: string
  desc: string[]
  skills: Resource[]
  url: string
}

export interface Spell {
  index: string
  name: string
  desc: string[]
  higher_level: string[]
  range: string
  components: string[]
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  attack_type: string
  damage: {
    damage_type: Resource
    damage_at_slot_level: Record<number, string>
  }
  school: Resource
  classes: Resource[]
  subclasses: Resource[]
  url: string
}

interface EquipmentOption {
  desc: string
  choose: number
  type: string
  from: {
    option_set_type: string
    options: {
      option_type: string
      item?: Resource
      count?: number
      choice?: EquipmentOption
    }[]
  }
}

export interface Class {
  index: string
  name: string
  hit_die: number
  proficiency_choices: {
    desc: string
    choose: number
    type: string
    from: {
      option_set_type: string
      options: Resource[]
    }
  }[]
  proficiencies: Resource[]
  saving_throws: Resource[]
  starting_equipment: {
    equipment: Resource
    quantity: number
  }[]
  starting_equipment_options: {
    desc: string
    choose: number
    type: string
    from: {
      option_set_type: string
      options: EquipmentOption[]
    }
  }[]
  class_levels: string
  multi_classing: {
    prerequisites: {
      ability_score: Resource
      minimum_score: number
    }[]
    proficiencies: Resource[]
  }
  subclasses: Resource[]
  url: string
}

export interface Skill {
  index: string
  name: string
  desc: string[]
  ability_score: Resource
  url: string
}

export interface Equipment {
  index: string
  name: string
  equipment_category: Resource
  gear_category?: Resource
  category_range?: string
  range?: {
    normal: number
  }
  cost: {
    quantity: number
    unit: string
  }
  weight: number
  desc: string[]
  special: string[]
  url: string
  contents: any[]
  properties?: Resource[]
  weapon_category?: string
  weapon_range?: string
  damage?: {
    damage_dice: string
    damage_type: Resource
  }
  tool_category?: string
}

export interface Proficiency {
  index: string
  type: string
  name: string
  classes: Resource[]
  races: Resource[]
  reference: Resource
  url: string
}

export interface Monster {
  index: string
  name: string
  size: string
  type: string
  subtype: string
  alignment: string
  armor_class: number
  hit_points: number
  hit_dice: string
  xp: number
  desc?: string
  image?: string
  speed: {
    walk: number
    swim?: number
    fly?: number
    burrow?: number
    climb?: number
  }
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  proficiencies: {
    proficiency: Resource
    value: number
  }[]
  proficiency_bonus: number
  damage_vulnerabilities: string[]
  damage_resistances: string[]
  damage_immunities: string[]
  condition_immunities: Resource[]
  senses: {
    darkvision?: number
    blindsight?: number
    tremorsense?: number
    truesight?: number
    passive_perception?: number
  }
  languages: string
  challenge_rating: number
  special_abilities: {
    name: string
    desc: string
  }[]
  actions: {
    name: string
    desc: string
  }[]
  legendary_actions: {
    name: string
    desc: string
  }[]
  url: string
}
