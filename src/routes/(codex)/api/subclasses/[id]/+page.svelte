<script>
  import { md } from '$lib/format.js'

  /** @type {any & { streamed: any }} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Class</dt>
    <dd>
      <a href={data.class.url}>{data.class.name}</a>
    </dd>
  </div>
  <div class="stat-item">
    <dt>Type</dt>
    <dd>{data.subclass_flavor}</dd>
  </div>
</dl>

{#await data.streamed.subclass_levels then levels}
  {#if levels.length > 0}
    <h3 class="subtitle">Levels</h3>
    <table class="levels">
      <thead>
        <tr>
          <th>Level</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        {#each levels as { level, features }}
          <tr>
            <td>{level}</td>
            <td class="!text-left">
              {#each features as feature}
                <a class="tag" href={feature.url}>{feature.name}</a>
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
{/await}

{#if data.desc}
  <div class="description">
    {@html md(data.desc)}
  </div>
{/if}

{#if data.spells?.length > 0}
  <h3 class="subtitle">Spells</h3>
  {#each data.spells as { spell }}
    <a class="tag" href={spell.url}>{spell.name}</a>
  {/each}
{/if}
