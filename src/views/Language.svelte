<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<dl class="stats">
  <div class="stat-item">
    <dt>Type</dt>
    <dd>{data.type}</dd>
  </div>

  <div class="stat-item">
    <dt>Speakers</dt>
    <dd>{data.typical_speakers.join(', ')}</dd>
  </div>

  <div class="stat-item">
    <dt>Script</dt>
    <dd>{data.script}</dd>
  </div>
</dl>
