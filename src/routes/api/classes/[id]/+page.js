export const load = async ({ fetch, parent }) => {
  const data = await parent()

  return {
    streamed: {
      class_levels: async () => {
        const res = await fetch(`https://www.dnd5eapi.co${data.class_levels}`)
        return await res.json()
      },
    },
  }
}
