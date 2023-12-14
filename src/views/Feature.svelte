<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Level</dt>
    <dd>{data.level}</dd>
  </div>

  <div class="stat-item">
    <dt>Class</dt>
    <dd>{data.class.name}</dd>
  </div>
</dl>

<div class="description">
  {#each data.desc as desc}
    <p>{desc}</p>
  {/each}
</div>
