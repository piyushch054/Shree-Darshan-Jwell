import { useState } from 'react'
import { AuthFlowContext } from './auth-flow-context.js'

export function AuthFlowProvider({ children }) {
  const [email, setEmail] = useState('')

  return (
    <AuthFlowContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthFlowContext.Provider>
  )
}
