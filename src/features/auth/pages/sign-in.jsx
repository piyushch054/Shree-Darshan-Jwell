import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AuthHeading,
  AuthLayout,
  AuthNotice,
  authInputClass,
  AuthLabel,
  PasswordField,
} from '../components/AuthLayout.jsx'
import { authRoutes } from '../../../app/route-paths.js'
import { useAuthFlow } from '../auth-flow-context.js'
import { authDemoEnabled } from '../auth-demo.js'

export function SignInPage() {
  const location = useLocation()
  const { email, setEmail } = useAuthFlow()
  const [message, setMessage] = useState(location.state?.demoMessage ?? '')
  const [password, setPassword] = useState('')
  const [rememberEmail, setRememberEmail] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      authDemoEnabled
        ? 'Demo only: sign-in accepted for UI testing. No session was created.'
        : 'Sign-in is not connected yet. Your details have not been sent.',
    )
  }

  return (
    <AuthLayout>
      <AuthHeading
        description="Your favourites and meaningful moments, all in one place."
        eyebrow="Your personal jewellery world"
        title="Welcome back"
      />

      <div
        aria-label="Account options"
        className="mt-1.5 grid h-[43px] grid-cols-2 rounded-[8px] bg-[#ebebeb] p-[3px]"
      >
        <Link
          aria-current="page"
          className="flex items-center justify-center rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white shadow-sm"
          to={authRoutes.signIn}
        >
          Sign in
        </Link>
        <Link
          className="flex items-center justify-center rounded-[6px] text-[10px] font-medium text-[#686466] transition-colors hover:text-[#700039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.createAccount}
        >
          Create account
        </Link>
      </div>

      <form className="mt-[17px] space-y-[14px]" onSubmit={handleSubmit}>
        <div>
          <AuthLabel htmlFor="sign-in-email">
            <span className="mb-[5px] block">Email address</span>
          </AuthLabel>
          <input
            autoComplete="email"
            className={authInputClass}
            id="sign-in-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </div>

        <PasswordField
          autoComplete="current-password"
          id="sign-in-password"
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          value={password}
        />

        <div className="flex items-center justify-between pt-[1px] text-[9px] text-[#81797a]">
          <label className="flex cursor-pointer items-center gap-[7px]">
            <input
              checked={rememberEmail}
              className="h-[11px] w-[11px] accent-[#700039]"
              name="rememberEmail"
              onChange={(event) => setRememberEmail(event.target.checked)}
              type="checkbox"
            />
            <span>Remember my email</span>
          </label>
          <Link
            className="text-[#700039] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
            to={authRoutes.forgotPassword}
          >
            Forgot password?
          </Link>
        </div>

        <button
          className="h-[40px] w-full rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white transition-colors hover:bg-[#57002d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#700039]"
          type="submit"
        >
          Sign in
        </button>
      </form>

      {message ? (
        <AuthNotice tone={authDemoEnabled ? 'info' : 'error'}>{message}</AuthNotice>
      ) : (
        authDemoEnabled && (
          <AuthNotice tone="info">
            Local demo mode is active. Sign-in does not authenticate or create a
            session.
          </AuthNotice>
        )
      )}

      <p className="mt-[15px] text-center text-[9px] text-[#999091]">
        New to Shree Nitha?{' '}
        <Link
          className="text-[#700039] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.createAccount}
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}
