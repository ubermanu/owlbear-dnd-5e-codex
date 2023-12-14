<script>
  import Link from '../components/Link.svelte'

  /** @type {import('../types').Proficiency} */
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
      <Link url={data.reference.url}>
        {data.reference.name}
      </Link>
    </dd>
  </div>
</dl>

{#if data.classes?.length > 0}
  <h3>Classes</h3>
  <div class="classes">
    {#each data.classes as cls}
      <Link class="tag" url={cls.url}>{cls.name}</Link>
    {/each}
  </div>
{/if}

{#if data.races?.length > 0}
  <h3>Races</h3>
  <div class="races">
    {#each data.races as race}
      <Link class="tag" url={race.url}>{race.name}</Link>
    {/each}
  </div>
{/if}
