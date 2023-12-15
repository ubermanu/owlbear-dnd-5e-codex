<script>
  import { md } from '$lib/format.js'

  /** @type {import('$lib/types.js').Skill} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Ability</dt>
    <dd>
      <a href={data.ability_score.url}>
        {data.ability_score.name}
      </a>
    </dd>
  </div>
</dl>

<div class="description">
  {@html md(data.desc)}
</div>
