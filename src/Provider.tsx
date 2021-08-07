import { MonetizationState } from '@webmonetization/types'
import React, { useEffect, useState } from 'react'

import { WebMonetizationContext } from './context'
import { addMonetizationEventListener } from './utils/addMonetizationEventListener'

export const WebMonetizationProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<MonetizationState>('pending')

  useEffect(() => {
    const onStart = () => {
      setState('started')
    }
    const onStop = () => {
      setState('stopped')
    }

    const events = [
      addMonetizationEventListener('monetizationstart', onStart),
      addMonetizationEventListener('monetizationprogress', onStart),
      addMonetizationEventListener('monetizationstop', onStop),
    ]

    return () => {
      events.forEach((removeListener) => removeListener())
    }
  }, [setState])

  return (
    <WebMonetizationContext.Provider
      value={{ isActive: state === 'started', state }}
    >
      {children}
    </WebMonetizationContext.Provider>
  )
}
