<script>
  import { debounce } from 'radash'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import Case from 'case'

  $: category = $page.params.category || ''

  const onInput = debounce({ delay: 200 }, async (e) => {
    const query = e.target.value
    const endpoint = `/api/${category}`

    if (!query) {
      await goto(endpoint, { keepFocus: true })
      return
    }

    await goto(`${endpoint}?name=${query}`, { keepFocus: true })
  })

  $: placeholder = Case.sentence(`Filter ${Case.title(category)} by name...`)
</script>

{#if category}
  <input
    class="mb-3 w-full border-b border-disabled bg-transparent p-1 text-base placeholder-disabled focus:border-primary focus:outline-none"
    autocomplete="off"
    type="text"
    {placeholder}
    on:input={onInput}
  />
{/if}
