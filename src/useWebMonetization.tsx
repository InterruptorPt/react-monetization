import { useContext } from 'react'

import { WebMonetizationContext } from './context'
import { WebMonetizationContextValue } from './types'

export const useWebMonetization = (): WebMonetizationContextValue => {
  const webMonetizationContext = useContext(WebMonetizationContext)

  if (!webMonetizationContext) {
    throw new Error(
      `[useWebMonetization] You're using the context outside of the WebMonetizationProvider`,
    )
  }

  return webMonetizationContext
}
