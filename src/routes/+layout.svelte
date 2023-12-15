<script>
  import '../app.postcss'
  import { page } from '$app/stores'
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import ThemeProvider from '$lib/components/ThemeProvider.svelte'
  import SearchBar from '$lib/components/SearchBar.svelte'

  // TODO: Update input placeholder (search by name, etc.)

  /** @type {{ theme: import('@owlbear-rodeo/sdk').Theme }} */
  export let data
</script>

<ThemeProvider>
  <main>
    <SearchBar />
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
</ThemeProvider>

<style>
  main {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
    height: 100vh;
    color: var(--text-color);
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
    /*background: #6a6c77;*/
  }

  .scroll-area::-webkit-scrollbar-thumb:hover {
    /*background: #bb99ff;*/
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    /*color: #6a6c77;*/
    font-size: 0.8rem;
  }
</style>
