<script>
  export let data
</script>

<h2 class="title">{data.name}</h2>

<p class="description">{@html data.desc.join('<br>')}</p>
