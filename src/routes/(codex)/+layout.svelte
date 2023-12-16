<script>
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import SearchBar from '$lib/components/SearchBar.svelte'
  import ResultCount from '$lib/components/ResultCount.svelte'
  import { SettingsIcon } from 'svelte-feather-icons'
</script>

<main class="flex h-screen flex-col p-4">
  <header class="mb-3 flex items-center gap-4">
    <SearchBar />
    <a href="/settings" class="flex-shrink-0">
      <SettingsIcon class="h-4 w-4" />
    </a>
  </header>
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
