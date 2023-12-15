<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import SearchBar from '$lib/components/SearchBar.svelte'

  /** @type {any & { count?: number }} */
  export let data

  $: console.log(data)
</script>

<main class="flex h-screen flex-col p-4">
  <SearchBar />
  <div class="min-h-0 flex-grow">
    <div
      class="max-h-full overflow-y-auto scrollbar-thin scrollbar-track-muted scrollbar-thumb-disabled scrollbar-track-rounded scrollbar-thumb-rounded"
    >
      <slot />
    </div>
  </div>
  <footer class="mt-2 flex items-center justify-between text-sm">
    <Breadcrumbs />
    {#if data.count}
      <span>{`${data.count} results`}</span>
    {/if}
  </footer>
</main>
