import '@testing-library/jest-dom'
import 'jest-extended'

beforeEach(() => {
  document.monetization = Object.assign(document.createElement('div'), {
    state: 'pending' as const,
  })
})
