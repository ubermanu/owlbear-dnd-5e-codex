<script>
  // TODO: Implement the rest of the fields
  export let data
</script>

<h2 class="title">{data.name}</h2>

<h3 class="subtitle">Starting Proficiencies</h3>

<div class="tags">
  {#each data.starting_proficiencies as proficiency}
    <a class="tag" href={proficiency.url}>{proficiency.name}</a>
  {/each}
</div>

<h3 class="subtitle">Starting Equipment</h3>

<div class="tags">
  {#each data.starting_equipment as { equipment, quantity }}
    <a class="tag" href={equipment.url}>
      {equipment.name}
      {#if quantity > 1}
        <span>({quantity})</span>
      {/if}
    </a>
  {/each}
</div>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
