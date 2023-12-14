<script>
  import Link from '../components/Link.svelte'

  /** @type {import('../types.js').Class} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<h3>Saving Throws</h3>
<div class="tags">
  {#each data.saving_throws as saving_throw}
    <Link url={saving_throw.url} class="tag">{saving_throw.name}</Link>
  {/each}
</div>

<h3>Proficiencies</h3>
<div class="tags">
  {#each data.proficiencies as proficiency}
    <Link url={proficiency.url} class="tag">{proficiency.name}</Link>
  {/each}
</div>

<h3>Starting Equipment</h3>
<div class="tags">
  {#each data.starting_equipment as starting_equipment}
    <Link url={starting_equipment.equipment.url} class="tag">
      {starting_equipment.equipment.name}
      {#if starting_equipment.quantity > 1}
        ({starting_equipment.quantity})
      {/if}
    </Link>
  {/each}
</div>

<h3>Starting Equipment Options</h3>
<div class="tags">
  {#each data.starting_equipment_options as starting_equipment_option}
    <span class="tag">
      {starting_equipment_option.choose} from...
    </span>
  {/each}
</div>

<style>
  h3 {
    margin-bottom: 0.5em;
    font-size: 1.1rem;
  }
</style>
