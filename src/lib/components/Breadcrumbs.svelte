<script>
  // @ts-nocheck
  import { page } from '$app/stores'

  // Generates the breadcrumbs from the current page URL
  /** @type {{ name: string; url: string }[]} */
  $: breadcrumbs = $page.url.pathname
    .replace(/^\/api\//, '')
    .split('/')
    .filter(Boolean)
    .reduce(
      (acc, segment, index, array) => [
        ...acc,
        { name: segment, url: '/api/' + array.slice(0, index + 1).join('/') },
      ],
      []
    )
</script>

{#if breadcrumbs.length > 0}
  <span
    class="breadcrumbs flex items-center gap-1 text-sm font-light text-disabled"
  >
    <a class="hover:text-primary" href="/">codex</a>
    {#each breadcrumbs as crumb}
      <span class="separator">/</span>
      {#if crumb.url === $page.url.pathname}
        <span class="text-primary">{crumb.name}</span>
      {:else}
        <a class="hover:text-primary" href={crumb.url}>{crumb.name}</a>
      {/if}
    {/each}
  </span>
{/if}
