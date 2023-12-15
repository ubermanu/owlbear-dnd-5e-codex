<script>
  /** @type {import('./$types').Proficiency} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Type</dt>
    <dd>{data.type}</dd>
  </div>

  <div class="stat-item">
    <dt>Reference</dt>
    <dd>
      <a href={data.reference.url}>
        {data.reference.name}
      </a>
    </dd>
  </div>
</dl>

{#if data.classes?.length > 0}
  <h3>Classes</h3>
  <div class="classes">
    {#each data.classes as cls}
      <a class="tag" href={cls.url}>{cls.name}</a>
    {/each}
  </div>
{/if}

{#if data.races?.length > 0}
  <h3>Races</h3>
  <div class="races">
    {#each data.races as race}
      <a class="tag" href={race.url}>{race.name}</a>
    {/each}
  </div>
{/if}
