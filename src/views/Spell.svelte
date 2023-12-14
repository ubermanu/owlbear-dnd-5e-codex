<script>
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

<p class="description">{@html data.desc.join('<br>')}</p>

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
      <span class="tag">{cls.name}</span>
    {/each}
  </p>
{/if}

<style>
  .title {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #bb99ff;
    font-size: 2rem;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }

  .stats dt {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8em;
  }

  .stats dd {
    margin-bottom: 0.5em;
    margin-left: 0;
    font-size: 1.1rem;
  }

  .description {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .material {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
    font-size: 0.8em;
  }

  .available {
    font-size: 0.8em;
  }

  .tag {
    display: inline-block;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
    border-radius: 0.2em;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.2em 0.5em;
    color: #fff;
  }
</style>
