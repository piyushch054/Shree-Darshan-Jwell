import { useState } from 'react'
import { Link } from 'react-router-dom'
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

export function CreateAccountPage() {
  const [fullName, setFullName] = useState('')
  const { email, setEmail } = useAuthFlow()
  const [password, setPassword] = useState('')
  const [rememberEmail, setRememberEmail] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      authDemoEnabled
        ? 'Demo only: form accepted for UI testing. No account was created.'
        : 'Account creation is not connected yet. Your details have not been sent.',
    )
  }

  return (
    <AuthLayout>
      <AuthHeading
        description="A place for your favourites, your designs, your moments."
        eyebrow="Your personal jewellery world"
        title="A beautiful beginning"
      />

      <div
        aria-label="Account options"
        className="mt-1.5 grid h-[43px] grid-cols-2 rounded-[8px] bg-[#ebebeb] p-[3px]"
      >
        <Link
          className="flex items-center justify-center rounded-[6px] text-[10px] font-medium text-[#686466] transition-colors hover:text-[#700039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.signIn}
        >
          Sign in
        </Link>
        <Link
          aria-current="page"
          className="flex items-center justify-center rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.createAccount}
        >
          Create account
        </Link>
      </div>

      <form className="mt-[17px] space-y-[11px]" onSubmit={handleSubmit}>
        <div>
          <AuthLabel htmlFor="create-account-name">
            <span className="mb-[5px] block">Full name</span>
          </AuthLabel>
          <input
            autoComplete="name"
            className={authInputClass}
            id="create-account-name"
            name="name"
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Your full name"
            required
            value={fullName}
          />
        </div>

        <div>
          <AuthLabel htmlFor="create-account-email">
            <span className="mb-[5px] block">Email address</span>
          </AuthLabel>
          <input
            autoComplete="email"
            className={authInputClass}
            id="create-account-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </div>

        <PasswordField
          autoComplete="new-password"
          id="create-account-password"
          label="Password"
          minLength={8}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          value={password}
        />

        <label className="flex cursor-pointer items-center gap-[7px] pt-[1px] text-[9px] text-[#81797a]">
          <input
            checked={rememberEmail}
            className="h-[11px] w-[11px] accent-[#700039]"
            name="rememberEmail"
            onChange={(event) => setRememberEmail(event.target.checked)}
            type="checkbox"
          />
          <span>Remember my email</span>
        </label>

        <button
          className="h-[40px] w-full rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white transition-colors hover:bg-[#57002d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#700039]"
          type="submit"
        >
          Create account
        </button>
      </form>

      {message ? (
        <AuthNotice tone={authDemoEnabled ? 'info' : 'error'}>{message}</AuthNotice>
      ) : (
        authDemoEnabled && (
          <AuthNotice tone="info">
            Local demo mode is active. Account creation is not connected.
          </AuthNotice>
        )
      )}
    </AuthLayout>
  )
}
