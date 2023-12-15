<script>
  import 'the-new-css-reset/css/reset.css'
  import '../app.css'
  import { debounce } from 'radash'
  import { goto } from '$lib/navigation.js'
  import { page } from '$lib/stores.js'
  import { categories } from '$lib/api.js'
  import { view } from '../router.js'
  import Breadcrumbs from '../components/Breadcrumbs.svelte'

  /** @param {string} query */
  async function search(query) {
    const endpoint = $page.url.pathname.split('/').slice(0, 3).join('/')

    if (endpoint === '/') {
      return
    }

    if (!query) {
      await goto(endpoint)
      return
    }

    await goto(`${endpoint}?name=${query}`)
  }

  $: console.log($page.url.pathname)

  // TODO: Update input placeholder (search by name, etc.)
</script>

<main>
  <input
    class="input"
    autocomplete="off"
    type="text"
    placeholder="Search..."
    on:input={debounce({ delay: 200 }, async (e) => {
      await search(e.target.value)
    })}
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
      {:else if $page.url.pathname.length > 1}
        <svelte:component this={view($page.url.pathname)} data={$page.data} />
      {:else}
        <ul class="search-results">
          {#each categories as item}
            <li>
              <button class="search-item" on:click={() => goto(item.url)}>
                {item.name}
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
  <footer class="footer">
    <Breadcrumbs />
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

  .input {
    margin-bottom: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: none;
    padding: 0.5rem;
    color: #fff;
    font-size: 1rem;
  }

  .input::placeholder {
    opacity: 0.5;
    color: #fff;
    font-weight: 300;
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
    margin-left: auto;
    font-weight: 300;
  }
</style>
