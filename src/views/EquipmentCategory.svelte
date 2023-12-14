<script>
  import Link from '../components/Link.svelte'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="equipments">
  {#each data.equipment as equipment}
    <Link class="tag" url={equipment.url}>
      {equipment.name}
    </Link>
  {/each}
</div>
