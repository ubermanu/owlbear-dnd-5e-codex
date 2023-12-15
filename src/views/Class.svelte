<script>
  import Link from '../components/Link.svelte'
  import { fetchDnD } from '../lib/api.js'

  /** @type {import('../types.js').Class} */
  export let data

  const levels_promise = fetchDnD(data.class_levels)
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Hit Dice</dt>
    <dd>{data.hit_die}</dd>
  </div>
  <div class="stat-item">
    <dt>Saving Throws</dt>
    <dd>
      {data.saving_throws.map((saving_throw) => saving_throw.name).join(', ')}
    </dd>
  </div>
</dl>

{#await levels_promise then levels}
  {#if levels.length > 0}
    <h3>Levels</h3>
    <table class="levels">
      <thead>
        <tr>
          <th>Level</th>
          <th>Prof. Bonus</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        {#each levels as { level, prof_bonus, features }}
          <tr>
            <td class="nb">{level}</td>
            <td class="nb">+{prof_bonus}</td>
            <td>
              {#if features.length > 0}
                {#each features as feature}
                  <Link class="tag" url={feature.url}>{feature.name}</Link>
                {/each}
              {:else}
                —
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    <h3>Spell casting</h3>
    <table class="levels">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th colspan="9">~ Spell Slots per Spell Level ~</th>
        </tr>
        <tr>
          <th>Level</th>
          <th>Cantrips Known</th>
          {#each Array.from({ length: 9 }) as _, i}
            <th>Lv {i + 1}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each levels as { level, spellcasting }}
          <tr>
            <td class="nb">{level}</td>
            {#if spellcasting}
              <td class="nb">{spellcasting.cantrips_known}</td>
              {#each Array.from({ length: 9 }) as _, i}
                <td class="nb">
                  {spellcasting[`spell_slots_level_${i + 1}`] || ''}
                </td>
              {/each}
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
{/await}

<h3>Proficiencies</h3>
<div class="tags">
  {#each data.proficiencies as proficiency}
    <Link url={proficiency.url} class="tag">{proficiency.name}</Link>
  {/each}
</div>

<h3>Starting Equipment</h3>
<div class="tags">
  {#each data.starting_equipment as starting_equipment}
    <Link url={starting_equipment.equipment.url} class="tag">
      {starting_equipment.equipment.name}
      {#if starting_equipment.quantity > 1}
        ({starting_equipment.quantity})
      {/if}
    </Link>
  {/each}
</div>

<h3>Starting Equipment Options</h3>
<div class="tags">
  {#each data.starting_equipment_options as starting_equipment_option}
    <span class="tag">
      {starting_equipment_option.choose} from...
    </span>
  {/each}
</div>

<style>
  h3 {
    margin-bottom: 0.5em;
    font-size: 1.1rem;
  }

  .nb {
    text-align: center;
  }
</style>
