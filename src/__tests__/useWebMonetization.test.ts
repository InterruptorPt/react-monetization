import { renderHook } from '@testing-library/react-hooks'

import { useWebMonetization, WebMonetizationProvider } from '..'
import { fireMonetizationEvent } from '../utils/testHelpers/fireMonetizationEvent'

describe('useWebMonetization()', () => {
  it('shows monetization as inactive by default', () => {
    const { result } = renderHook(useWebMonetization, {
      wrapper: WebMonetizationProvider,
    })

    expect(result.current.isActive).toBe(false)
    expect(result.current.state).toBe('pending')
  })

  it('updates when monetization is active', async () => {
    const { result } = renderHook(useWebMonetization, {
      wrapper: WebMonetizationProvider,
    })

    fireMonetizationEvent('monetizationstart')

    expect(result.current.isActive).toBe(true)
    expect(result.current.state).toBe('started')
  })

  it('updates when monetization is stopped', async () => {
    const { result } = renderHook(useWebMonetization, {
      wrapper: WebMonetizationProvider,
    })

    fireMonetizationEvent('monetizationstart')

    expect(result.current.isActive).toBe(true)
    expect(result.current.state).toBe('started')

    fireMonetizationEvent('monetizationstop')

    expect(result.current.isActive).toBe(false)
    expect(result.current.state).toBe('stopped')
  })

  it('throws an error when used outside of the provider', () => {
    const { result } = renderHook(useWebMonetization)

    expect(result.error?.message).toBe(
      `[useWebMonetization] You're using the context outside of the WebMonetizationProvider`,
    )
  })
})
