<script>
  import { debounce } from 'radash'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import Case from 'case'

  $: endpoint = $page.url.pathname.split('/').slice(0, 3).join('/')

  /** @param {string} query */
  async function search(query) {
    if (endpoint === '/') {
      return
    }

    if (!query) {
      await goto(endpoint, { keepFocus: true })
      return
    }

    await goto(`${endpoint}?name=${query}`, { keepFocus: true })
  }

  const onInput = debounce({ delay: 200 }, async (e) => {
    await search(e.target.value)
  })

  // Update input placeholder (search by name, etc.)
  $: category = endpoint.split('/')[2]
  $: placeholder = category
    ? Case.sentence(`Search ${Case.title(category)} by name...`)
    : 'Search'
</script>

{#if endpoint && endpoint !== '/'}
  <input
    class="mb-3 w-full border-b border-disabled bg-transparent p-1 text-base placeholder-disabled focus:border-primary focus:outline-none"
    autocomplete="off"
    type="text"
    {placeholder}
    on:input={onInput}
  />
{/if}
