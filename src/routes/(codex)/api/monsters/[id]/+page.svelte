<script>
  import Case from 'case'
  import fracty from 'fracty'

  import { PUBLIC_API_URL } from '$env/static/public'
  import { md } from '$lib/format.js'

  /** @type {import('$lib/types.js').Monster} */
  export let data
</script>

{#if data.image}
  <div class="float-right m-4 mt-0">
    <img
      class="block rounded-sm shadow"
      src={PUBLIC_API_URL.concat(data.image)}
      width="200"
      alt=""
    />
  </div>
{/if}

<h2 class="title">{data.name}</h2>

<p class="mb-4 italic text-disabled">
  {data.size}
  {data.type}
  {#if data.subtype}
    ({data.subtype})
  {/if}
  {data.alignment}
</p>

<dl class="stats">
  <div class="stat-item">
    <dt>Armor Class</dt>
    <dd>{data.armor_class[0]?.value}</dd>
  </div>

  <div class="stat-item">
    <dt>Hit Points</dt>
    <dd>{data.hit_points} ({data.hit_dice})</dd>
  </div>

  <div class="stat-item">
    <dt>Speed</dt>
    <dd>{data.speed.walk}</dd>
  </div>

  <div class="stat-item">
    <dt>Challenge</dt>
    <dd>{fracty(data.challenge_rating)}</dd>
  </div>

  <div class="stat-item">
    <dt>XP</dt>
    <dd>{data.xp}</dd>
  </div>

  {#if data.proficiency_bonus}
    <div class="stat-item">
      <dt>Proficiency Bonus</dt>
      <dd>+ {data.proficiency_bonus}</dd>
    </div>
  {/if}
</dl>

<h3 class="subtitle">Abilities</h3>
<table class="abilities rounded">
  <thead>
    <tr>
      <th>STR</th>
      <th>DEX</th>
      <th>CON</th>
      <th>INT</th>
      <th>WIS</th>
      <th>CHA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.strength}</td>
      <td>{data.dexterity}</td>
      <td>{data.constitution}</td>
      <td>{data.intelligence}</td>
      <td>{data.wisdom}</td>
      <td>{data.charisma}</td>
    </tr>
  </tbody>
</table>

{#if data.proficiencies?.length > 0}
  <h3 class="subtitle">Proficiencies</h3>
  <div class="proficiencies">
    {#each data.proficiencies as { proficiency, value }}
      <a class="tag" href={proficiency.url}>
        {proficiency.name}
        {#if value}
          <span>+{value}</span>
        {/if}
      </a>
    {/each}
  </div>
{/if}

{#if data.senses}
  <h3 class="subtitle">Senses</h3>
  <div class="senses">
    {#each Object.entries(data.senses) as [sense, value]}
      <span class="tag">
        {Case.sentence(sense)}
        {#if value}
          {value}
        {/if}
      </span>
    {/each}
  </div>
{/if}

{#if data.special_abilities?.length > 0}
  <h3 class="subtitle">Special Abilities</h3>
  <div class="special-abilities">
    {#each data.special_abilities as ability}
      <div class="special-ability">
        <h4>{ability.name}</h4>
        <p>{ability.desc}</p>
      </div>
    {/each}
  </div>
{/if}

{#if data.actions?.length > 0}
  <h3 class="subtitle">Actions</h3>
  <div class="actions">
    {#each data.actions as action}
      <div class="action">
        <h4>{action.name}</h4>
        <p>{action.desc}</p>
      </div>
    {/each}
  </div>
{/if}

{#if data.legendary_actions?.length > 0}
  <h3 class="subtitle">Legendary Actions</h3>
  <div class="legendary-actions">
    {#each data.legendary_actions as action}
      <div class="legendary-action">
        <h4>{action.name}</h4>
        <p>{action.desc}</p>
      </div>
    {/each}
  </div>
{/if}

{#if data.damage_vulnerabilities?.length > 0}
  <h3 class="subtitle">Damage Vulnerabilities</h3>
  {#each data.damage_vulnerabilities as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.damage_resistances?.length > 0}
  <h3 class="subtitle">Damage Resistances</h3>
  {#each data.damage_resistances as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.damage_immunities?.length > 0}
  <h3 class="subtitle">Damage Immunities</h3>
  {#each data.damage_immunities as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.condition_immunities?.length > 0}
  <h3 class="subtitle">Condition Immunities</h3>
  {#each data.condition_immunities as condition}
    <a class="tag" href={condition.url}>
      {Case.sentence(condition.name)}
    </a>
  {/each}
{/if}

{#if data.languages}
  <h3 class="subtitle">Languages</h3>
  {#each data.languages.split(',') as language}
    <span class="tag">{Case.sentence(language.trim())}</span>
  {/each}
{/if}

{#if data.desc}
  <h3 class="subtitle">Description</h3>
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

<style lang="postcss">
  .abilities {
    background: var(--background-color);
  }

  .abilities th {
    @apply px-3 py-1 text-center text-sm font-normal uppercase text-disabled;
  }

  .abilities td {
    @apply px-3 py-1 text-center;
  }

  h4 {
    @apply mb-1 mt-2 text-lg text-secondary;
  }
</style>
