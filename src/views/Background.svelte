<script>
  import Link from '../components/Link.svelte'

  // TODO: Implement the rest of the fields
  export let data
</script>

<h2 class="title">{data.name}</h2>

<h3>Starting Proficiencies</h3>
<div class="tags">
  {#each data.starting_proficiencies as proficiency}
    <Link class="tag" url={proficiency.url}>
      {proficiency.name}
    </Link>
  {/each}
</div>

<h3>Starting Equipment</h3>
<div class="tags">
  {#each data.starting_equipment as { equipment, quantity }}
    <Link class="tag" url={equipment.url}>
      {equipment.name}
      {#if quantity > 1}
        <span>({quantity})</span>
      {/if}
    </Link>
  {/each}
</div>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
