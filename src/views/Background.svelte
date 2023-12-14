<script>
  import { goto } from '../lib/navigation.js'

  // TODO: Implement the rest of the fields
  export let data
</script>

<h2 class="title">{data.name}</h2>

<h3>Starting Proficiencies</h3>
<div class="tags">
  {#each data.starting_proficiencies as proficiency}
    <button class="tag" on:click={() => goto(proficiency.url)}>
      {proficiency.name}
    </button>
  {/each}
</div>

<h3>Starting Equipment</h3>
<div class="tags">
  {#each data.starting_equipment as { equipment, quantity }}
    <button class="tag" on:click={() => goto(equipment.url)}>
      {equipment.name}
      {#if quantity > 1}
        <span>({quantity})</span>
      {/if}
    </button>
  {/each}
</div>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
