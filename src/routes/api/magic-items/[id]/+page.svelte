<script>
  import { md } from '$lib/format.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Equipment Category</dt>
    <dd>
      <a href={data.equipment_category.url}>
        {data.equipment_category.name}
      </a>
    </dd>
  </div>
  <div class="stat-item">
    <dt>Rarity</dt>
    <dd>{data.rarity.name}</dd>
  </div>
</dl>

{#if data.desc}
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}
