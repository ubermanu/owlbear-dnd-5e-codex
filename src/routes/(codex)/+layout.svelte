<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import SearchBar from '$lib/components/SearchBar.svelte'
  import ResultCount from '$lib/components/ResultCount.svelte'
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
    <ResultCount />
  </footer>
</main>
