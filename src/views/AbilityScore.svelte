<script>
  import Link from '../components/Link.svelte'
  import { md } from '../lib/format.js'

  /** @type {import('../types.js').AbilityScore} */
  export let data
</script>

<h2 class="title">{data.full_name}</h2>

<div class="description">
  {@html md(data.desc)}
</div>

<div class="skills">
  {#each data.skills as skill}
    <Link href={skill.url} class="tag">{skill.name}</Link>
  {/each}
</div>
