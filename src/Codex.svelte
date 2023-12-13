<script>
  import { debounce } from 'radash'
  import { writable } from 'svelte/store'

  const categories = [
    { name: 'Spells', emoji: '🔮', path: 'spells' },
    { name: 'Skills', emoji: '💪', path: 'skills' },
    { name: 'Equipment', emoji: '⚔️', path: 'equipment' },
    { name: 'Classes', emoji: '🙋', path: 'classes' },
    { name: 'Features', emoji: '🎯', path: 'features' },
    { name: 'Monsters', emoji: '🐉', path: 'monsters' },
  ]

  const currentFilter = writable(categories[0])

  let results = []
  let inputPlaceholder = 'Search...'

  $: {
    inputPlaceholder = `Search ${$currentFilter.name?.toLowerCase()}...`
  }

  /**
   * Executes a search against the DnD 5e API
   *
   * @param {string} query
   */
  async function search(query) {
    if (query.length < 3) {
      results = []
      return
    }

    const url = `https://www.dnd5eapi.co/api/${$currentFilter.path}/?name=${query}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      results = data.results
      console.log(results)
    } catch (error) {
      console.error(error)
      inputPlaceholder = 'Something went wrong...'
    }
  }
</script>

<main>
  <div class="categories">
    {#each categories as cat}
      <button
        class="category"
        on:click={() => ($currentFilter = cat)}
        class:active={$currentFilter === cat}
      >
        {cat.emoji}
      </button>
    {/each}
  </div>
  <input
    class="input"
    autocomplete="off"
    type="text"
    placeholder={inputPlaceholder}
    on:input={debounce({ delay: 200 }, (e) => search(e.target.value))}
  />
  <div class="results">
    {#each results as result}
      <div>{result.name}</div>
    {/each}
  </div>
  <footer class="footer">
    {#if results.length > 0}
      <div class="count">{results.length} results</div>
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

  .results {
    flex-grow: 1;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #6a6c77;
    font-size: 0.8rem;
  }
</style>
