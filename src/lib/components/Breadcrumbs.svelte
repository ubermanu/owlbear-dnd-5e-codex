<script>
  import { page } from '$app/stores'

  // Generates the breadcrumbs from the current page URL
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
  <span class="breadcrumbs">
    <a class="item" href="/">codex</a>
    {#each breadcrumbs as crumb}
      <span class="separator">/</span>
      {#if crumb.url === $page.url.pathname}
        <span class="item current">{crumb.name}</span>
      {:else}
        <a class="item" href={crumb.url}>{crumb.name}</a>
      {/if}
    {/each}
  </span>
{/if}

<style>
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 300;
  }

  .breadcrumbs .item:hover {
    color: #bb99ff;
  }

  .breadcrumbs .current {
    color: #bb99ff;
    font-weight: 500;
  }
</style>
