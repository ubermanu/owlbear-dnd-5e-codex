<script>
  import { goto } from '../lib/navigation.js'

  export let url = ''
</script>

<button on:click={() => goto(url)} {...$$restProps}>
  <slot />
</button>
