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
