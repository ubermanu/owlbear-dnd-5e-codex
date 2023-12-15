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
</script>

<input
  class="input"
  autocomplete="off"
  type="text"
  placeholder="Search..."
  on:input={debounce({ delay: 200 }, async (e) => {
    await search(e.target.value)
  })}
/>

<style>
  .input {
    margin-bottom: 1rem;
    outline: none;
    border: none;
    border-bottom: 1px solid currentColor;
    background: none;
    padding: 0.5rem;
    /*color: #fff;*/
    font-size: 1rem;
  }

  .input::placeholder {
    opacity: 0.5;
    /*color: #fff;*/
    font-weight: 300;
  }

  .input:focus {
    border-bottom: 1px solid #bb99ff;
  }
</style>
