<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

{#if data.subsections?.length > 0}
  {#each data.subsections as section}
    <a class="tag" href={section.url}>{section.name}</a>
  {/each}
{/if}
