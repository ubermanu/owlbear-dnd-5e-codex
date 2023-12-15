<script>
  import { debounce } from 'radash'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  /** @param {string} query */
  async function search(query) {
    const endpoint = $page.url.pathname.split('/').slice(0, 3).join('/')

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

  // TODO: Update input placeholder (search by name, etc.)
</script>

<input
  class="mb-1 border-b border-disabled bg-transparent p-1 text-base placeholder-disabled focus:border-primary focus:outline-none"
  autocomplete="off"
  type="text"
  placeholder="Search..."
  on:input={onInput}
/>
