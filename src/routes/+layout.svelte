<script>
  import '../app.postcss'

  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { debounce } from 'radash'
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'

  /** @param {string} query */
  async function search(query) {
    const endpoint = $page.url.pathname.split('/').slice(0, 3).join('/')

    if (endpoint === '/') {
      return
    }

    if (!query) {
      await goto(endpoint, { keepFocus: true })
      return
    }

    await goto(`${endpoint}?name=${query}`, { keepFocus: true })
  }

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
      <slot />
    </div>
  </div>
  <footer class="footer">
    <Breadcrumbs />
    {#if 'count' in $page.data}
      <span>{`${$page.data.count} results`}</span>
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

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    color: #6a6c77;
    font-size: 0.8rem;
  }
</style>
