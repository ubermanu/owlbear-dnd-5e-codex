<script>
  import Link from '../components/Link.svelte'

  export let data
</script>

<h2 class="title">{data.name}</h2>

{#if data.subsections?.length > 0}
  {#each data.subsections as section}
    <Link class="tag" url={section.url}>{section.name}</Link>
  {/each}
{/if}
