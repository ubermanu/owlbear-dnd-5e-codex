<script>
  /** @type {import('../types.js').Skill} */
  export let data
</script>

<h2 class="title">{data.name}</h2>

<p class="ability">
  <span>Ability:</span>
  <span class="tag">{data.ability_score.name}</span>
</p>

<p class="description">{@html data.desc.join('<br>')}</p>
