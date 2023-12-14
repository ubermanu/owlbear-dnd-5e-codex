<script>
  import Link from '../components/Link.svelte'

  /** @type {import('../types.js').AbilityScore} */
  export let data
</script>

<h2 class="title">{data.full_name}</h2>

<div class="description">
  {#each data.desc as desc}
    <p>{desc}</p>
  {/each}
</div>

<div class="skills">
  {#each data.skills as skill}
    <Link href={skill.url} class="tag">{skill.name}</Link>
  {/each}
</div>
