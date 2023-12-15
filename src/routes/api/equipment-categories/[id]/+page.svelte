<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="equipments">
  {#each data.equipment as equipment}
    <a class="tag" href={equipment.url}>
      {equipment.name}
    </a>
  {/each}
</div>
