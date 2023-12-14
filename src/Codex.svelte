<script>
  import { debounce } from 'radash'
  import { writable } from 'svelte/store'
  import { fetchDnD } from './lib/api.js'
  import Spell from './views/Spell.svelte'
  import Class from './views/Class.svelte'
  import Armor from './icons/Armor.svelte'
  import Wand from './icons/Wand.svelte'
  import Dragon from './icons/Dragon.svelte'

  const categories = [
    { name: 'Spells', icon: Wand, url: '/api/spells' },
    { name: 'Skills', icon: null, url: '/api/skills' },
    { name: 'Equipment', icon: Armor, url: '/api/equipment' },
    { name: 'Classes', icon: null, url: '/api/classes' },
    { name: 'Monsters', icon: Dragon, url: '/api/monsters' },
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
        class:active={$page.url.startsWith(cat.url)}
        title={cat.name}
      >
        {#if cat.icon}
          <svelte:component this={cat.icon} />
        {/if}
        <span>{cat.name}</span>
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
    <div class="scroll-area">
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
      {:else if $page.url.startsWith('/api/spells/')}
        <Spell data={$page.data} />
      {:else if $page.url.startsWith('/api/classes/')}
        <Class data={$page.data} />
      {:else}
        <pre>{JSON.stringify($page, null, 2)}</pre>
      {/if}
    </div>
  </div>
  <footer class="footer">
    {#if 'count' in $page.data && +$page.data.count > 0}
      <div class="count">{$page.data.count} results</div>
    {/if}
    {#if $page.url}
      <span class="breadcrumbs">
        {$page.url.replace(/^\/api\//, '').replace(/\//, ' / ')}
      </span>
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
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    font-size: 0.9em;
  }

  .category :global(svg) {
    width: 1.3rem;
  }

  .category.active {
    color: #bb99ff;
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

  .scroll-area {
    max-height: 100%;
    overflow-y: auto;
  }

  .scroll-area::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  .scroll-area::-webkit-scrollbar-track {
    border-radius: 0.2rem;
    background: #3b3d4b;
  }

  .scroll-area::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background: #6a6c77;
  }

  .scroll-area::-webkit-scrollbar-thumb:hover {
    background: #bb99ff;
  }

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

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    color: #6a6c77;
    font-size: 0.8rem;
  }

  .footer .count {
    font-weight: 300;
  }

  .footer .breadcrumbs {
    margin-left: auto;
    font-weight: 300;
  }
</style>
