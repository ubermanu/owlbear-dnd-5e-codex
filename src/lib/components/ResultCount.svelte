<script>
  import { page } from '$app/stores'
</script>

{#if $page.data.count}
  <span class="text-sm">{`${$page.data.count} results`}</span>
{/if}
