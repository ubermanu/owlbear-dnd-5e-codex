<script>
  /** @type {import('../types.js').Equipment} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  {#if data.weapon_category}
    <div class="stat-item">
      <dt>Weapon</dt>
      <dd>{data.category_range}</dd>
    </div>
  {:else if data.tool_category}
    <div class="stat-item">
      <dt>Tool</dt>
      <dd>{data.tool_category}</dd>
    </div>
  {:else}
    <div class="stat-item">
      <dt>Equipment Category</dt>
      <dd>{data.equipment_category.name}</dd>
    </div>
  {/if}
  {#if data.gear_category}
    <div class="stat-item">
      <dt>Gear Category</dt>
      <dd>{data.gear_category.name}</dd>
    </div>
  {/if}
  {#if data.damage}
    <div class="stat-item">
      <dt>Damage</dt>
      <dd>
        {#if data.damage.damage_dice}
          {data.damage.damage_dice} {data.damage.damage_type.name}
        {:else}
          {data.damage.damage_type.name}
        {/if}
      </dd>
    </div>
  {/if}
  {#if data.range}
    <div class="stat-item">
      <dt>Range</dt>
      <dd>
        {#if data.range.normal}
          {data.range.normal} ft
        {:else}
          -
        {/if}
      </dd>
    </div>
  {/if}
  {#if data.properties?.length > 0}
    <div class="stat-item">
      <dt>Properties</dt>
      <dd>
        {data.properties.map((prop) => prop.name).join(', ')}
      </dd>
    </div>
  {/if}
  <div class="stat-item">
    <dt>Cost</dt>
    <dd>{data.cost.quantity} {data.cost.unit}</dd>
  </div>
  <div class="stat-item">
    <dt>Weight</dt>
    <dd>
      {#if data.weight}
        {data.weight} lbs
      {:else}
        -
      {/if}
    </dd>
  </div>
</dl>

<p class="description">{@html data.desc.join('<br>')}</p>

{#if data.special}
  <p class="description">{@html data.special.join('<br>')}</p>
{/if}

<style>
  .title {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #bb99ff;
    font-size: 2rem;
  }

  .description {
    margin-top: 0;
    margin-bottom: 0.5em;
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
</style>
