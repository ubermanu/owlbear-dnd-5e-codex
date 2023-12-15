export const load = async ({ fetch, parent }) => {
  const data = await parent()

  return {
    streamed: {
      subclass_levels: async () => {
        const res = await fetch(
          `https://www.dnd5eapi.co${data.subclass_levels}`
        )
        return await res.json()
      },
    },
  }
}
