<script>
  import { ArrowLeftIcon } from 'svelte-feather-icons'
</script>

<main class="flex h-screen flex-col p-4">
  <header class="mb-3 flex items-center gap-4">
    <a href="/" class="flex-shrink-0">
      <ArrowLeftIcon class="h-4 w-4" />
    </a>
  </header>

  <label class="checkbox">
    <input type="checkbox" />
    <span class="label">Hide the Codex for players</span>
  </label>
</main>
