<script>
  import Case from 'case'
  import fracty from 'fracty'

  import { API_URL } from '$lib/api.js'
  import { md } from '$lib/format.js'

  /** @type {import('$lib/types.js').Monster} */
  export let data
</script>

{#if data.image}
  <div class="image">
    <img src={API_URL.concat(data.image)} width="200" alt="" />
  </div>
{/if}

<h2 class="title">{data.name}</h2>

<p class="subtitle">
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
    <dd>{data.armor_class[0].value}</dd>
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

<h3>Abilities</h3>
<table class="abilities">
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
  <h3>Proficiencies</h3>
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
  <h3>Senses</h3>
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
  <h3>Special Abilities</h3>
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
  <h3>Actions</h3>
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
  <h3>Legendary Actions</h3>
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
  <h3>Damage Vulnerabilities</h3>
  {#each data.damage_vulnerabilities as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.damage_resistances?.length > 0}
  <h3>Damage Resistances</h3>
  {#each data.damage_resistances as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.damage_immunities?.length > 0}
  <h3>Damage Immunities</h3>
  {#each data.damage_immunities as damage}
    <a class="tag" href="/api/damage-types/{damage}">
      {Case.sentence(damage)}
    </a>
  {/each}
{/if}

{#if data.condition_immunities?.length > 0}
  <h3>Condition Immunities</h3>
  {#each data.condition_immunities as condition}
    <a class="tag" href={condition.url}>
      {Case.sentence(condition.name)}
    </a>
  {/each}
{/if}

{#if data.languages}
  <h3>Languages</h3>
  {#each data.languages.split(',') as language}
    <span class="tag">{Case.sentence(language.trim())}</span>
  {/each}
{/if}

{#if data.desc}
  <h3>Description</h3>
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

<style>
  .image {
    float: right;
    margin: 1rem;
  }

  .image img {
    display: block;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }

  .subtitle {
    font-style: italic;
  }

  .abilities {
    border-radius: 0.5rem;
    border-collapse: collapse;
    border-spacing: 0;
    background: #232632;
    width: fit-content;
  }

  .abilities th {
    padding: 0.2rem 1rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8em;
    text-align: center;
  }

  .abilities td {
    padding: 0.2rem 1rem;
    text-align: center;
  }

  h4 {
    margin-bottom: 0.2em;
    color: #bb99ff;
  }
</style>
