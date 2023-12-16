<script>
  import { ArrowLeftIcon } from 'svelte-feather-icons'
</script>

<main class="flex h-screen flex-col p-4">
  <header class="mb-3 flex items-center gap-4">
    <a href="/" class="flex-shrink-0">
      <ArrowLeftIcon class="h-4 w-4" />
    </a>
  </header>

  <div class="flex-grow">
    <h1 class="mb-4 text-2xl font-bold">Settings</h1>
    <label class="checkbox">
      <input type="checkbox" />
      <span class="label">Hide the Codex for players</span>
    </label>
  </div>

  <footer class="flex justify-end">
    <p class="text-sm">D&D 5e Codex v0.1.0</p>
  </footer>
</main>
