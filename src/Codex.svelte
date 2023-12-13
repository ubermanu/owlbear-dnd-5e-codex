<script>
  import { debounce } from 'radash'
  import { writable } from 'svelte/store'
  import { fetchDnD } from './lib/api.js'

  const categories = [
    { name: 'Spells', emoji: '🔮', url: '/api/spells' },
    { name: 'Skills', emoji: '💪', url: '/api/skills' },
    { name: 'Equipment', emoji: '⚔️', url: '/api/equipment' },
    { name: 'Classes', emoji: '🙋', url: '/api/classes' },
    { name: 'Features', emoji: '🎯', url: '/api/features' },
    { name: 'Monsters', emoji: '🐉', url: '/api/monsters' },
  ]

  // TODO: Add types
  const page = writable({ url: '', data: {} })

  /** @param {string} url */
  async function goto(url) {
    if (url === $page.url) {
      return
    }

    if (url.length === 0) {
      page.set({ url: '', data: {} })
      return
    }

    $page.url = url
    $page.data = await fetchDnD(url)
  }

  /** @param {string} query */
  async function search(query) {
    if (!query) {
      await goto('')
    }
    // TODO: Go to with search params
  }
</script>

<main>
  <div class="categories">
    {#each categories as cat}
      <button
        class="category"
        on:click={() => goto(cat.url)}
        class:active={$page.url === cat.url}
      >
        {cat.emoji}
      </button>
    {/each}
  </div>
  <input
    class="input"
    autocomplete="off"
    type="text"
    placeholder="Search..."
    on:input={debounce({ delay: 200 }, (e) => search(e.target.value))}
  />
  <div class="content">
    {#if 'results' in $page.data && Array.isArray($page.data.results)}
      <ul class="search-results">
        {#each $page.data.results as item}
          <li>
            <button class="search-item" on:click={() => goto(item.url)}>
              {item.name}
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <pre style="white-space: pre-wrap;">{JSON.stringify($page, null, 2)}</pre>
    {/if}
  </div>
  <footer class="footer">
    {#if 'count' in $page.data && +$page.data.count > 0}
      <div class="count">{$page.data.count} results</div>
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

  .input:focus {
    border-bottom: 1px solid #bb99ff;
  }

  .content {
    flex-grow: 1;
    min-height: 0;
  }

  .search-results {
    margin: 0;
    padding: 0.2rem 0.5rem 0.2rem 0.2rem;
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

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    color: #6a6c77;
    font-size: 0.8rem;
  }
</style>
