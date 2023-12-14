<script>
  import { goto } from '../lib/navigation.js'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<div class="description">
  {#each data.desc as desc}
    <p>{desc}</p>
  {/each}
</div>

<ul class="skills">
  {#each data.skills as skill}
    <li>
      <button class="tag" on:click={() => goto(skill.url)}>
        {skill.name}
      </button>
    </li>
  {/each}
</ul>

<style>
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em;
    margin-top: 1.25em;
  }
</style>
