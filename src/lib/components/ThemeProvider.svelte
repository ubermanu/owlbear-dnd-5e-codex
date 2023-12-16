<script>
  import { onMount } from 'svelte'

  /** @type {import('@owlbear-rodeo/sdk').Theme} */
  let theme

  onMount(async () => {
    const { OBR } = window

    if (!OBR.isAvailable) {
      return
    }

    theme = await OBR.theme.getTheme()

    // Update the theme when it changes
    OBR.theme.onChange((newTheme) => {
      theme = newTheme
    })
  })
</script>

{#if theme}
  <div
    class:dark={theme.mode === 'DARK'}
    style:--text-color={theme.text.primary}
    style:--text-color-disabled={theme.text.disabled}
    style:--text-color-muted={theme?.mode === 'DARK'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.04)'}
    style:--primary-color={theme.primary.main}
    style:--primary-text-color={theme.primary.contrastText}
    style:--secondary-color={theme.secondary.main}
    style:--background-color={theme.background.default}
    style:--secondary-text-color={theme.secondary.contrastText}
    style:--surface-color={theme.background.paper}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}
