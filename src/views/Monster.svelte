<script>
  import Case from 'case'
  import fracty from 'fracty'
  import Link from '../components/Link.svelte'

  export let data
</script>

<h2 class="title">{data.name}</h2>

<p class="subtitle">
  {data.size}
  {data.type}
  {#if data.subtype}
    ({data.subtype})
  {/if}
  {data.alignment}
</p>

<!--{#if data.image}-->
<!--  <div class="image">-->
<!--&lt;!&ndash;    <img src={url(data.image)} width="100" alt="" />&ndash;&gt;-->
<!--  </div>-->
<!--{/if}-->

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
      <Link class="tag" url={proficiency.url}>
        {proficiency.name}
        {#if value}
          <span>+{value}</span>
        {/if}
      </Link>
    {/each}
  </div>
{/if}

{#if data.senses}
  <h3>Senses</h3>
  <div class="senses">
    {#each Object.entries(data.senses) as [sense, value]}
      <span>
        {Case.sentence(sense)}
        {#if value}
          {value}
        {/if}
      </span>
    {/each}
  </div>
{/if}

{#if data.languages}
  <h3>Languages</h3>
  <p>{Case.sentence(data.languages)}</p>
{/if}

{#if data.desc}
  <h3>Description</h3>
  <div class="description">
    <p>{data.desc}</p>
  </div>
{/if}

<style>
  .subtitle {
    font-style: italic;
  }

  .abilities {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-collapse: collapse;
    border-spacing: 0;
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
</style>
