import { MonetizationObject, MonetizationState } from '@webmonetization/types'

declare global {
  interface Document {
    monetization?: MonetizationObject
  }
}

export type WebMonetizationContextValue = {
  isActive: boolean
  state: MonetizationState // "pending" | "started" | "stopped"
}
