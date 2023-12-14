<script>
  import { md } from '../lib/format.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

{#if data.desc}
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

<style>
  .description :global(h2:first-child) {
    display: none;
  }
</style>
