<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="description">
  {#each data.desc as desc}
    <p>{desc}</p>
  {/each}
</div>
