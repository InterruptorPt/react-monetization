import { createContext } from 'react'

import { WebMonetizationContextValue } from './types'

export const WebMonetizationContext = createContext<
  WebMonetizationContextValue | undefined
>(undefined)
