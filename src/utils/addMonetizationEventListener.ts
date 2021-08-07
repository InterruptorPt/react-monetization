import {
  MonetizationEventMap,
  MonetizationEventType,
} from '@webmonetization/types/build'
import { TEventListener } from '@webmonetization/types/build/genericEventListeners'

export const addMonetizationEventListener = <
  TEvent extends MonetizationEventType,
>(
  event: TEvent,
  eventListener: TEventListener<MonetizationEventMap[TEvent]>,
): (() => void) => {
  document.monetization?.addEventListener(event, eventListener, {
    passive: true,
  })

  return () => document.monetization?.removeEventListener(event, eventListener)
}
