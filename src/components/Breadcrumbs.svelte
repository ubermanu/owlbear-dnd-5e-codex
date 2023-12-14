<script>
  import { goto } from '../lib/navigation.js'
  import { page } from '../lib/stores.js'

  // Generates the breadcrumbs from the current page URL
  $: breadcrumbs = $page.url
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
    <button class="item" on:click={() => goto('')}>codex</button>
    {#each breadcrumbs as crumb}
      <span class="separator">/</span>
      {#if crumb.url === $page.url}
        <span class="item current">{crumb.name}</span>
      {:else}
        <button class="item" on:click={() => goto(crumb.url)}
          >{crumb.name}</button
        >
      {/if}
    {/each}
  </span>
{/if}

<style>
  button {
    display: inline-block;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
  }

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
