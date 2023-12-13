<script>
  import { debounce } from 'radash'
  import { writable } from 'svelte/store'
  import { onMount } from 'svelte'

  const categories = [
    { name: 'Spells', emoji: '🔮', url: '/api/spells' },
    { name: 'Skills', emoji: '💪', url: '/api/skills' },
    { name: 'Equipment', emoji: '⚔️', url: '/api/equipment' },
    { name: 'Classes', emoji: '🙋', url: '/api/classes' },
    { name: 'Features', emoji: '🎯', url: '/api/features' },
    { name: 'Monsters', emoji: '🐉', url: '/api/monsters' },
  ]

  const resourceId = writable(categories[0].url)
  let page = {}

  /**
   * Sets the current category filter
   *
   * @param {any} cat
   */
  async function setCategory(cat) {
    $resourceId = cat.url
  }

  async function fetchDnD(path) {
    const url = `https://www.dnd5eapi.co${path}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  }

  async function renderResource() {
    page = await fetchDnD($resourceId)
  }

  onMount(async () => {
    await renderResource()
  })
</script>

<main>
  <div class="categories">
    {#each categories as cat}
      <button
        class="category"
        on:click={() => setCategory(cat)}
        class:active={$resourceId === cat.url}
      >
        {cat.emoji}
      </button>
    {/each}
  </div>
  <!--  <input-->
  <!--    class="input"-->
  <!--    autocomplete="off"-->
  <!--    type="text"-->
  <!--    placeholder={inputPlaceholder}-->
  <!--    on:input={debounce({ delay: 200 }, (e) => search(e.target.value))}-->
  <!--  />-->
  <div class="content">
    {#if 'results' in page && Array.isArray(page.results)}
      <ul class="search-results">
        {#each page.results as result}
          <li>{result.name}</li>
        {/each}
      </ul>
    {:else}
      <pre>{JSON.stringify(page, null, 2)}</pre>
    {/if}
  </div>
  <footer class="footer">
    {#if 'count' in page && +page.count > 0}
      <div class="count">{page.count} results</div>
    {/if}
  </footer>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
    height: 100vh;
  }

  .categories {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .category {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    font-size: 1rem;
  }

  .category.active {
    filter: drop-shadow(0 0 0.2rem #fff);
  }

  .input {
    margin-bottom: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    background: none;
    padding: 0.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
  }

  .input::placeholder {
    opacity: 0.5;
    color: #fff;
  }

  .content {
    flex-grow: 1;
    min-height: 0;
  }

  .search-results {
    margin: 0;
    padding-right: 0.5rem;
    padding-left: 0;
    max-height: 100%;
    overflow-y: auto;
    list-style: none;
  }

  .search-results::-webkit-scrollbar {
    width: 0.5rem;
  }

  .search-results::-webkit-scrollbar-track {
    border-radius: 0.2rem;
    background: #3b3d4b;
  }

  .search-results::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background: #6a6c77;
  }

  .search-results::-webkit-scrollbar-thumb:hover {
    background: #bb99ff;
  }

  .search-results li {
    transition: background 0.1s ease-out;
    cursor: pointer;
    margin-bottom: 0.2rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .search-results li:hover {
    background: #3b3d4b;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    color: #6a6c77;
    font-size: 0.8rem;
  }
</style>
