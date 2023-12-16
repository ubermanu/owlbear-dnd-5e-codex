<script>
  import { md } from '$lib/format.js'

  export let data
</script>

<div class="float-right m-4">
  {#if data.race}
    <a class="tag" href={data.race.url}>{data.race.name}</a>
  {/if}
</div>

<h2 class="title">{data.name}</h2>

{#if data.desc}
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

<h3 class="subtitle">Ability Bonuses</h3>
<div>
  {#each data.ability_bonuses as { bonus, ability_score }}
    <a class="tag" href={ability_score.url}>{ability_score.name} +{bonus}</a>
  {/each}
</div>

{#if data.starting_proficiencies?.length > 0}
  <h3 class="subtitle">Starting Proficiencies</h3>
  {#each data.starting_proficiencies as proficiency}
    <a class="tag" href={proficiency.url}>{proficiency.name}</a>
  {/each}
{/if}
{#if data.racial_traits?.length > 0}
  <h3 class="subtitle">Racial Traits</h3>
  {#each data.racial_traits as trait}
    <a class="tag" href={trait.url}>{trait.name}</a>
  {/each}
{/if}

{#if data.languages?.length > 0}
  <h3 class="subtitle">Languages</h3>
  <div>
    {#each data.languages as language}
      <a class="tag" href={language.url}>{language.name}</a>
    {/each}
  </div>
{/if}
