import { createEvent, fireEvent } from '@testing-library/react'
import { MonetizationEventType } from '@webmonetization/types/build'

export const fireMonetizationEvent = (
  eventType: MonetizationEventType,
): void => {
  const monetization = document.monetization as unknown as Element
  const event = createEvent(eventType, monetization)

  fireEvent(monetization, event)
}
