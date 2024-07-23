import React, { useEffect, useState } from 'react'
import { AsyncThunk, PayloadAction, Unsubscribe, addListener } from '@reduxjs/toolkit'
import { store } from '../../redux/store'

interface Props<T extends AsyncThunk<any, any, any>> {
  attempt: T
  onPending?: (action: any) => void
  // onFulfilled?: (action: PayloadAction<ReturnType<T>>, listenerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>, unknown>) => void
  onFulfilled?: (action: any, listenerApi: any) => void
  onRejected?: (action: any, listenerApi: any) => void
}

export function useAttemptListener<T extends AsyncThunk<any, any, any>>({
  attempt,
  onPending,
  onFulfilled,
  onRejected,
}: Props<T>): boolean {
  const [pending, setPending] = useState<boolean>(false)

  useEffect(() => {
    const removeAttemptPendingListener = store.dispatch(
      addListener({
        actionCreator: attempt.pending,
        effect: (action) => {
          setPending(true)
          onPending && onPending(action)
        },
      }),
    )

    const removeAttemptSuccessListener: Unsubscribe = store.dispatch(
      addListener({
        actionCreator: attempt.rejected,
        effect: (action, listenerApi) => {
          setPending(false)
          onRejected
            ? onRejected(action, listenerApi)
            : console.error(`${attempt.name} has been rejected!`)
        },
      }),
    )

    const removeAttemptErrorListener = store.dispatch(
      addListener({
        actionCreator: attempt.fulfilled,
        effect: (action, listenerApi) => {
          setPending(false)
          onFulfilled && onFulfilled(action, listenerApi)
        },
      }),
    )

    return () => {
      removeAttemptSuccessListener()
      removeAttemptErrorListener()
      removeAttemptPendingListener()
    }
  }, [attempt])

  return pending
}
