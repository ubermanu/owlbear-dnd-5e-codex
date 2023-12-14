<script>
  import Link from '../components/Link.svelte'

  /** @type {import('../types.js').Skill} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Ability</dt>
    <dd>
      <Link url={data.ability_score.url}>
        {data.ability_score.name}
      </Link>
    </dd>
  </div>
</dl>

<p class="description">
  {#each data.desc as desc}
    <p>{desc}</p>
  {/each}
</p>
