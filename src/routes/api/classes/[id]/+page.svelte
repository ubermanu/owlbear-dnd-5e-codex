<script>
  /** @type {import('$lib/types.js').Class & { streamed: any }} */
  export let data
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

{#await data.streamed.class_levels then levels}
  {#if levels.length > 0}
    <h3 class="subtitle">Levels</h3>
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
                  <a class="tag" href={feature.url}>{feature.name}</a>
                {/each}
              {:else}
                —
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    {#if levels[0].spellcasting}
      <h3 class="subtitle">Spell casting</h3>
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
  {/if}
{/await}

<h3 class="subtitle">Proficiencies</h3>
<div class="tags">
  {#each data.proficiencies as proficiency}
    <a href={proficiency.url} class="tag">{proficiency.name}</a>
  {/each}
</div>

<h3 class="subtitle">Starting Equipment</h3>
<div class="tags">
  {#each data.starting_equipment as starting_equipment}
    <a href={starting_equipment.equipment.url} class="tag">
      {starting_equipment.equipment.name}
      {#if starting_equipment.quantity > 1}
        ({starting_equipment.quantity})
      {/if}
    </a>
  {/each}
</div>

<h3 class="subtitle">Starting Equipment Options</h3>
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
