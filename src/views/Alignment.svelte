<script>
  import { md } from '../lib/format.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="description">
  {@html md(data.desc)}
</div>
