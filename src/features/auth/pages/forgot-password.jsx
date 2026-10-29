import { Link, useNavigate } from 'react-router-dom'
import {
  AuthHeading,
  AuthLayout,
  authInputClass,
  AuthLabel,
} from '../components/AuthLayout.jsx'
import { authRoutes } from '../../../app/route-paths.js'
import { useAuthFlow } from '../auth-flow-context.js'

export function ForgotPasswordPage() {
  const navigate = useNavigate()
  const { email, setEmail } = useAuthFlow()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(authRoutes.verifyCode)
  }

  return (
    <AuthLayout>
      <AuthHeading
        description="Let's help you return to your personal jewellery world."
        eyebrow="A little help getting back"
        title="Forget your Password?"
      />

      <form className="mt-[17px] space-y-[9px]" onSubmit={handleSubmit}>
        <div>
          <AuthLabel htmlFor="forgot-password-email">
            <span className="mb-[5px] block">Email address</span>
          </AuthLabel>
          <input
            autoComplete="email"
            className={authInputClass}
            id="forgot-password-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </div>

        <button
          className="h-[40px] w-full rounded-[6px] bg-[#700039] text-[11px] font-semibold text-white transition-colors hover:bg-[#57002d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#700039]"
          type="submit"
        >
          Continue to verification
        </button>
      </form>

      <p className="mt-4 text-center text-[10px] text-[#938b8b]">
        <Link
          className="text-[#700039] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          to={authRoutes.signIn}
        >
          Back to sign in
        </Link>
      </p>
    </AuthLayout>
  )
}
