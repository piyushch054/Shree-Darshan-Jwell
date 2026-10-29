import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authRoutes } from '../../../app/route-paths.js'

export function BrandMark() {
  return (
    <img
      alt="ShriDarshan Jewellers"
      className="block h-auto w-[min(100%,250px)]"
      height="184"
      src="/images/shridarshan-jewellers-logo.png"
      width="330"
    />
  )
}

export function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-white md:grid md:grid-cols-[55%_45%]">
      <section
        aria-label="ShriDarshan Jewellers"
        className="relative h-[32svh] min-h-[220px] overflow-hidden md:h-screen md:min-h-[680px]"
      >
        <img
          alt="A woman wearing traditional jewellery and a burgundy silk sari"
          className="absolute inset-0 h-full w-full object-cover object-top md:object-fill"
          src="/images/jewellery-editorial.png"
        />
      </section>

      <section className="flex min-h-[620px] flex-col px-6 pb-10 pt-8 sm:px-10 md:h-screen md:min-h-[680px] md:px-[clamp(28px,4vw,58px)] md:pb-8 md:pt-9">
        <header className="flex justify-center">
          <Link
            aria-label="ShriDarshan Jewellers home"
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#700039]"
            to={authRoutes.signIn}
          >
            <BrandMark />
          </Link>
        </header>
        <div className="mx-auto mt-10 w-full max-w-[548px] md:mt-[54px]">
          {children}
        </div>
      </section>
    </main>
  )
}

export function AuthHeading({ eyebrow, title, description }) {
  useEffect(() => {
    document.title = `${title} | ShriDarshan Jewellers`
  }, [title])

  return (
    <div>
      <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#a46f32]">
        {eyebrow}
      </p>
      <h1 className="mt-1 text-[26px] font-bold italic leading-tight tracking-[-0.03em] text-[#650033]">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-[11px] leading-5 text-[#938b8b]">
          {description}
        </p>
      )}
    </div>
  )
}

export function AuthNotice({ children, tone = 'error' }) {
  const toneClass =
    tone === 'info'
      ? 'bg-[#f5f3fb] text-[#292c70]'
      : 'bg-[#fff5f8] text-[#700039]'

  return (
    <p
      aria-live="polite"
      className={`mt-3 rounded-md px-3 py-2 text-center text-[11px] ${toneClass}`}
      role="status"
    >
      {children}
    </p>
  )
}

export const authInputClass =
  'h-[41px] w-full rounded-[7px] border border-[#d8d5d5] bg-white px-3 text-[12px] text-[#30292b] outline-none transition placeholder:text-[#b8b5b5] focus:border-[#700039] focus:ring-2 focus:ring-[#700039]/10'

export function AuthLabel({ children, htmlFor }) {
  return (
    <label className="block text-[9px] text-[#6f6264]" htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export function PasswordField({
  autoComplete,
  id,
  label,
  minLength,
  onChange,
  placeholder,
  value,
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <AuthLabel htmlFor={id}>
        <span className="mb-[5px] block">{label}</span>
      </AuthLabel>
      <span className="relative block">
        <input
          autoComplete={autoComplete}
          className={`${authInputClass} pr-14`}
          id={id}
          minLength={minLength}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          required
          type={visible ? 'text' : 'password'}
          value={value}
        />
        <button
          aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
          className="absolute inset-y-0 right-3 text-[9px] font-medium text-[#700039] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#700039]"
          onClick={() => setVisible((current) => !current)}
          type="button"
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </span>
    </div>
  )
}
