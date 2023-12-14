<script>
  import { goto } from '../lib/navigation.js'

  /** @type {import('../types.js').Spell} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Level</dt>
    <dd>{data.level}</dd>
  </div>

  <div class="stat-item">
    <dt>Duration</dt>
    <dd>{data.duration}</dd>
  </div>

  <div class="stat-item">
    <dt>Casting time</dt>
    <dd>{data.casting_time}</dd>
  </div>

  <div class="stat-item">
    <dt>School</dt>
    <dd>{data.school?.name}</dd>
  </div>

  <div class="stat-item">
    <dt>Range / Area</dt>
    <dd>{data.range}</dd>
  </div>

  {#if data.attack_type}
    <div class="stat-item">
      <dt>Attack / Save</dt>
      <dd>{data.attack_type}</dd>
    </div>
  {/if}

  <div class="stat-item">
    <dt>Components</dt>
    <dd>
      {data.components?.join(', ')}
      {#if data.material}*{/if}
    </dd>
  </div>

  {#if data.damage}
    <div class="stat-item">
      <dt>Damage / Effect</dt>
      <dd>{data.damage.damage_type.name}</dd>
    </div>
  {/if}
</dl>

<p class="description">
  {#each data.desc as desc}
    <p>{@html desc}</p>
  {/each}
</p>

{#if data.higher_level?.length > 0}
  <p class="description">
    <b>At Higher Levels.</b>
    {@html data.higher_level.join('<br>')}
  </p>
{/if}

{#if data.material}
  <p class="material">* ({data.material})</p>
{/if}

{#if data.classes}
  <p class="available">
    <span>Available for</span>
    {#each data.classes as cls}
      <button class="tag" on:click={() => goto(cls.url)}>{cls.name}</button>
    {/each}
  </p>
{/if}

<style>
  .material {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
    font-size: 0.8em;
  }

  .available {
    margin-top: 1em;
  }
</style>
