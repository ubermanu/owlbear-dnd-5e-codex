<script>
  import { onMount } from 'svelte'
  import { obr } from '$lib/owlbear-sdk.js'

  /** @type {import('@owlbear-rodeo/sdk').Theme} */
  let theme

  onMount(async () => {
    const OBR = await obr()

    if (!OBR.isAvailable) {
      return
    }

    theme = await OBR.theme.getTheme()

    // Update the theme when it changes
    OBR.theme.onChange((/** @type {any} */ newTheme) => {
      theme = newTheme
    })
  })
</script>

{#if theme}
  <div
    class:dark={theme.mode === 'DARK'}
    style:--highlight-color={theme.primary.main}
    style:--highlight-color-hover={theme.primary.main}
    style:--text-color={theme.text.primary}
    style:--primary-color={theme.primary.main}
    style:--primary-text-color={theme.primary.contrastText}
    style:--secondary-color={theme.secondary.main}
    style:--secondary-text-color={theme.secondary.contrastText}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}
