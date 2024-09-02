import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  setup: async () => {
    console.log('Setup')

    return {
      teardown() {
        console.log('teardown')
      }
    }
  },
  transformMode: 'ssr'
}
