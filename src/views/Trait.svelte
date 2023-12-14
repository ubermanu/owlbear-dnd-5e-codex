<script>
  import Link from '../components/Link.svelte'

  export let data
</script>

<div class="races">
  {#if data.races?.length > 0}
    {#each data.races as race}
      <Link class="tag" url={race.url}>{race.name}</Link>
    {/each}
  {/if}

  {#if data.subraces?.length > 0}
    {#each data.subraces as subrace}
      <Link class="tag" url={subrace.url}>{subrace.name}</Link>
    {/each}
  {/if}
</div>

<h2 class="title">{data.name}</h2>

{#if data.proficiencies?.length > 0}
  <h3>Proficiencies</h3>
  {#each data.proficiencies as proficiency}
    <Link class="tag" url={proficiency.url}>{proficiency.name}</Link>
  {/each}
{/if}

{#if data.desc}
  <h3>Description</h3>
  <div class="description">
    {#each data.desc as desc}
      <p>{desc}</p>
    {/each}
  </div>
{/if}

{#if data.proficiency_choices && data.proficiency_choices.from.option_set_type === 'options_array'}
  <h3>Proficiency Choices</h3>

  {#each data.proficiency_choices.from.options as { option_type, item }}
    {#if option_type === 'reference'}
      <Link class="tag" url={item.url}>{item.name}</Link>
    {/if}
  {/each}
{/if}

<style>
  .races {
    float: right;
    margin: 1rem;
  }
</style>
