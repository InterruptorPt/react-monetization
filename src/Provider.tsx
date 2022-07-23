import { MonetizationState } from '@webmonetization/types'
import React, { useEffect, useState } from 'react'

import { WebMonetizationContext } from './context'
import { addMonetizationEventListener } from './utils/addMonetizationEventListener'

type WebMonetizationProviderProps = {
  children: React.ReactNode
}

export const WebMonetizationProvider = ({
  children,
}: WebMonetizationProviderProps): JSX.Element => {
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
  }, [])

  return (
    <WebMonetizationContext.Provider
      value={{ isActive: state === 'started', state }}
    >
      {children}
    </WebMonetizationContext.Provider>
  )
}
