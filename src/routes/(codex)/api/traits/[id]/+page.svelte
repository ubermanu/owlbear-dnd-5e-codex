<script>
  import { md } from '$lib/format.js'

  export let data
</script>

<div class="races">
  {#if data.races?.length > 0}
    {#each data.races as race}
      <a class="tag" href={race.url}>{race.name}</a>
    {/each}
  {/if}

  {#if data.subraces?.length > 0}
    {#each data.subraces as subrace}
      <a class="tag" href={subrace.url}>{subrace.name}</a>
    {/each}
  {/if}
</div>

<h2 class="title">{data.name}</h2>

{#if data.proficiencies?.length > 0}
  <h3 class="subtitle">Proficiencies</h3>
  {#each data.proficiencies as proficiency}
    <a class="tag" href={proficiency.url}>{proficiency.name}</a>
  {/each}
{/if}

{#if data.desc}
  <h3 class="subtitle">Description</h3>
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

{#if data.proficiency_choices && data.proficiency_choices.from.option_set_type === 'options_array'}
  <h3 class="subtitle">Proficiency Choices</h3>

  {#each data.proficiency_choices.from.options as { option_type, item }}
    {#if option_type === 'reference'}
      <a class="tag" href={item.url}>{item.name}</a>
    {/if}
  {/each}
{/if}

<style>
  .races {
    float: right;
    margin: 1rem;
  }
</style>
