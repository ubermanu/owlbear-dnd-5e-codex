<script>
  import { goto } from '../lib/navigation.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="equipments">
  {#each data.equipment as equipment}
    <button class="tag" on:click={() => goto(equipment.url)}>
      {equipment.name}
    </button>
  {/each}
</div>
