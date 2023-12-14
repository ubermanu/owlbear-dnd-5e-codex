<script>
  import { md } from '../lib/format.js'
  import Link from '../components/Link.svelte'

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
    <dd>
      <Link url={data.class.url}>{data.class.name}</Link>
    </dd>
  </div>
</dl>

<div class="description">
  {@html md(data.desc)}
</div>
