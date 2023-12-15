<script>
  import { md } from '$lib/format.js'

  /** @type {import('$lib/types.js').AbilityScore} */
  export let data
</script>

<h2 class="title">{data.full_name}</h2>

<div class="description">
  {@html md(data.desc)}
</div>

{#if data.skills?.length}
  <h3 class="subtitle">Skills</h3>
  <div class="skills">
    {#each data.skills as skill}
      <a href={skill.url} class="tag">{skill.name}</a>
    {/each}
  </div>
{/if}
