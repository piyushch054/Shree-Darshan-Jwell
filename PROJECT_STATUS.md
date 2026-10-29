# Project status

## Implemented

- Customer sign-in page at `/sign-in`, based on the provided Shree Darshan Jewellers design.
- Responsive split-panel layout, brand mark, sign-in form, password visibility toggle, and remember-email checkbox.
- Client-side required/email validation and explicit notices for unavailable backend actions.
- Account creation, forgot-password, verification-code, and reset-password screens based on the supplied designs.
- Development-only auth demo: accepts sign-in/signup form submissions for UI testing, allows any six-digit code to open reset-password, and returns to sign-in when matching new passwords are entered. Notices clarify that no real authentication, email, OTP, account, or password operation occurs.

## Navigation and flows

- `/` redirects to `/sign-in`.
- Sign-in links to `/sign-up` and `/forgot-password`; create account links back to `/sign-in`.
- Forgot password continues to `/verify-code`; the email remains in in-memory app state while navigating and the verification screen links back to edit it.
- `/reset-password` is implemented as a screen, but the verification page does not proceed there without real backend verification.

## Shared components

- `AuthLayout` and `BrandMark` provide the shared responsive split layout.
- `BrandMark` uses the supplied ShriDarshan Jewellers transparent logo asset at `public/images/shridarshan-jewellers-logo.png`.
- `AuthHeading`, `AuthNotice`, field styling, and `PasswordField` are reused throughout the auth screens.

## Outstanding dependencies

- Authentication backend/API for sign-in and account creation.
- Email delivery, OTP verification, and password reset backend flows.
- The auth demo is enabled only by Vite development mode (`import.meta.env.DEV`); production builds do not bypass authentication.

## Design note

- The hero panel uses the photograph and editorial copy cropped from the supplied design screenshot.
- Passwords and verification codes are not stored in the browser or sent to a backend. The email is held in memory only for the current app session.
