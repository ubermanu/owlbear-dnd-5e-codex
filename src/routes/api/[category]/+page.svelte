<script>
  export let data
</script>

<ul class="search-results">
  {#each data.results as item}
    <li>
      <a class="search-item" href={item.url}>
        {item.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  .search-results {
    margin: 0;
    padding: 0.2rem 0.5rem 0.2rem 0.2rem;
    list-style: none;
  }

  .search-item {
    display: block;
    transition: background 0.1s ease-out;
    cursor: pointer;
    margin-bottom: 0.2rem;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    background: none;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    text-align: left;
  }

  .search-item:hover {
    background: #3b3d4b;
  }

  .search-item:focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.2rem #bb99ff;
  }
</style>
