import { createContext, useContext } from 'react'

export const AuthFlowContext = createContext(null)

export function useAuthFlow() {
  const context = useContext(AuthFlowContext)

  if (!context) {
    throw new Error('useAuthFlow must be used within AuthFlowProvider.')
  }

  return context
}
