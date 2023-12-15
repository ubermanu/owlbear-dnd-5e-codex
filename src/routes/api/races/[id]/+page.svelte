<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Speed</dt>
    <dd>{data.speed}</dd>
  </div>
  <div class="stat-item">
    <dt>Size</dt>
    <dd>{data.size}</dd>
  </div>
</dl>

<div class="description">
  <p>{data.age}</p>
  <p>{data.size_description}</p>
  <p>{data.alignment}</p>
</div>

<h3>Ability Bonuses</h3>
<div>
  {#each data.ability_bonuses as { bonus, ability_score }}
    <a class="tag" href={ability_score.url}>{ability_score.name} +{bonus}</a>
  {/each}
</div>

{#if data.traits?.length > 0}
  <h3>Traits</h3>
  <div>
    {#each data.traits as trait}
      <a class="tag" href={trait.url}>{trait.name}</a>
    {/each}
  </div>
{/if}

<h3>Languages</h3>
<div>
  {#each data.languages as language}
    <a class="tag" href={language.url}>{language.name}</a>
  {/each}
</div>
<p>{data.language_desc}</p>

{#if data.subraces?.length > 0}
  <h3>Subraces</h3>
  <div>
    {#each data.subraces as subrace}
      <a class="tag" href={subrace.url}>{subrace.name}</a>
    {/each}
  </div>
{/if}
