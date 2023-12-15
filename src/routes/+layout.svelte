<script>
  import '../app.postcss'
  import ThemeProvider from '$lib/components/ThemeProvider.svelte'
</script>

<ThemeProvider>
  <slot />
</ThemeProvider>
