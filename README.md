# ShriDarshan Jewellers

A React and Tailwind CSS frontend for the ShriDarshan Jewellers customer sign-in screen.

## Development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Current scope

- `/` redirects to `/sign-in`.
- Sign-in, account creation (`/sign-up`), forgot password (`/forgot-password`), verification (`/verify-code`), and reset password (`/reset-password`) screens are implemented.
- Forms use browser validation and password visibility controls. Authentication, email delivery, OTP verification, and password reset need backend integrations that are not configured; the frontend reports this rather than simulating success.
- In local development (`npm run dev`), a clearly labeled demo flow lets you preview each auth screen. It does not authenticate users or create accounts, send email/OTPs, or save passwords. The bypass is disabled in production builds.

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for implemented pages, routes, and remaining dependencies.
