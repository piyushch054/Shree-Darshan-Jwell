import { useState } from 'react'
import {
  AuthHeading,
  AuthLayout,
  AuthNotice,
  PasswordField,
} from '../components/AuthLayout.jsx'
import { useNavigate } from 'react-router-dom'
import { authRoutes } from '../../../app/route-paths.js'
import { authDemoEnabled } from '../auth-demo.js'

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (password !== confirmation) {
      setMessage('Your passwords do not match.')
      return
    }

    if (authDemoEnabled) {
      navigate(authRoutes.signIn, {
        state: {
          demoMessage:
            'Demo only: password fields matched. No password was changed or saved.',
        },
      })
      return
    }

    setMessage(
      'Password reset is not connected yet. Your new password has not been saved.',
    )
  }

  return (
    <AuthLayout>
      <AuthHeading
        description="Use at least 8 characters for your password."
        eyebrow="A fresh start"
        title="Set a new password"
      />

      <form className="mt-[17px] space-y-[14px]" onSubmit={handleSubmit}>
        <PasswordField
          autoComplete="new-password"
          id="new-password"
          label="New Password"
          minLength={8}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter new password"
          value={password}
        />
        <PasswordField
          autoComplete="new-password"
          id="confirm-password"
          label="Confirm Password"
          minLength={8}
          onChange={(event) => setConfirmation(event.target.value)}
          placeholder="Enter confirm password"
          value={confirmation}
        />
        <button
          className="h-[40px] w-full rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white transition-colors hover:bg-[#57002d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#700039]"
          type="submit"
        >
          update password
        </button>
      </form>

      {message ? (
        <AuthNotice>{message}</AuthNotice>
      ) : (
        authDemoEnabled && (
          <AuthNotice tone="info">
            Local demo mode is active. Matching passwords return to sign in;
            nothing is saved.
          </AuthNotice>
        )
      )}
    </AuthLayout>
  )
}
