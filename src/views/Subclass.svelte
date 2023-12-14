<script>
  import Link from '../components/Link.svelte'
  import { md } from '../lib/format.js'
  import { fetchDnD } from '../lib/api.js'

  export let data

  const levels_promise = fetchDnD(data.subclass_levels)
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Class</dt>
    <dd>
      <Link url={data.class.url}>{data.class.name}</Link>
    </dd>
  </div>
  <div class="stat-item">
    <dt>Type</dt>
    <dd>{data.subclass_flavor}</dd>
  </div>
</dl>

{#await levels_promise then levels}
  {#if levels.length > 0}
    <h3>Levels</h3>
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
            <td>
              {#each features as feature}
                <Link class="tag" url={feature.url}>{feature.name}</Link>
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
    <Link class="tag" url={spell.url}>{spell.name}</Link>
  {/each}
{/if}
