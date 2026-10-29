import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AuthHeading,
  AuthLayout,
  AuthNotice,
  authInputClass,
} from '../components/AuthLayout.jsx'
import { authRoutes } from '../../../app/route-paths.js'
import { useAuthFlow } from '../auth-flow-context.js'
import { authDemoEnabled } from '../auth-demo.js'
import { useNavigate } from 'react-router-dom'

export function VerificationPage() {
  const navigate = useNavigate()
  const { email } = useAuthFlow()
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (code.length !== 6) {
      setMessage('Enter the six-digit verification code.')
      return
    }

    if (authDemoEnabled) {
      navigate(authRoutes.resetPassword)
      return
    }

    setMessage(
      'Verification is not connected. No code was sent, and your identity has not been verified.',
    )
  }

  return (
    <AuthLayout>
      <p className="mb-1 text-[10px]">
        <Link
          className="text-[#700039] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.forgotPassword}
        >
          ← Edit details
        </Link>
      </p>
      <AuthHeading
        description={`Verification for ${email || 'your email address'}`}
        eyebrow="One final little step"
        title="Make it yours"
      />

      <form className="mt-[17px] space-y-[9px]" onSubmit={handleSubmit}>
        <label
          className="block text-[9px] text-[#6f6264]"
          htmlFor="verification-code"
        >
          <span className="mb-[5px] block">Six-digit verification code</span>
          <input
            autoComplete="one-time-code"
            className={`${authInputClass} bg-[#f7f7f7] text-center text-[17px] font-semibold tracking-[0.55em] placeholder:text-[#aaa] placeholder:tracking-[0.55em]`}
            id="verification-code"
            inputMode="numeric"
            maxLength={6}
            name="code"
            onChange={(event) =>
              setCode(event.target.value.replace(/\D/g, '').slice(0, 6))
            }
            pattern="[0-9]{6}"
            placeholder="000000"
            required
            value={code}
          />
        </label>

        <button
          className="h-[40px] w-full rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white transition-colors hover:bg-[#57002d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#700039]"
          type="submit"
        >
          Continue to verification
        </button>
      </form>

      {message ? (
        <AuthNotice>{message}</AuthNotice>
      ) : (
        <AuthNotice tone="info">
          {authDemoEnabled
            ? 'Local demo mode: enter any six digits to preview the reset-password screen. No code was sent or verified.'
            : 'No verification code has been sent. This step needs an authentication backend before an account can be verified.'}
        </AuthNotice>
      )}
    </AuthLayout>
  )
}
