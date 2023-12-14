<script>
  import Link from '../components/Link.svelte'
  import { md } from '../lib/format.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Equipment Category</dt>
    <dd>
      <Link url={data.equipment_category.url}>
        {data.equipment_category.name}
      </Link>
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
