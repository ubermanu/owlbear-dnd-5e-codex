interface Resource {
  index: string
  name: string
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
