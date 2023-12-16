<script>
  import { page } from '$app/stores'
</script>

{#if $page.data.count}
  <span class="text-sm text-disabled">{`${$page.data.count} results`}</span>
{/if}
