import { MonetizationEventType } from '@webmonetization/types/build'

import { addMonetizationEventListener } from '../addMonetizationEventListener'
import { fireMonetizationEvent } from '../testHelpers/fireMonetizationEvent'

describe('addMonetizationEventListener()', () => {
  it('adds the received event listener', () => {
    const eventListener = jest.fn()
    const event: MonetizationEventType = 'monetizationstart'
    addMonetizationEventListener(event, eventListener)

    fireMonetizationEvent(event)

    expect(eventListener).toHaveBeenCalledTimes(1)
  })

  it('calling the "remove" function removes the listener', () => {
    const eventListener = jest.fn()
    const event: MonetizationEventType = 'monetizationprogress'
    const removeListener = addMonetizationEventListener(event, eventListener)

    expect(eventListener).toHaveBeenCalledTimes(0)
    fireMonetizationEvent(event)
    fireMonetizationEvent(event)
    expect(eventListener).toHaveBeenCalledTimes(2)

    removeListener()
    fireMonetizationEvent(event)
    fireMonetizationEvent(event)
    expect(eventListener).toHaveBeenCalledTimes(2)
  })
})
