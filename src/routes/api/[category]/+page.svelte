<script>
  /** @type {{ results: { name: string; index: string; url: string }[] }} */
  export let data
</script>

<ul class="search-results">
  {#each data.results as item}
    <li>
      <a class="search-item" href={item.url}>{item.name}</a>
    </li>
  {/each}
</ul>
