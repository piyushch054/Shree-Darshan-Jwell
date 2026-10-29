import { Navigate, Route, Routes } from 'react-router-dom'
import {
  CreateAccountPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SignInPage,
  VerificationPage,
} from '../features/auth/pages/index.jsx'
import { authRoutes } from './route-paths.js'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={authRoutes.signIn} />} />
      <Route path={authRoutes.signIn} element={<SignInPage />} />
      <Route path={authRoutes.createAccount} element={<CreateAccountPage />} />
      <Route path={authRoutes.forgotPassword} element={<ForgotPasswordPage />} />
      <Route path={authRoutes.verifyCode} element={<VerificationPage />} />
      <Route path={authRoutes.resetPassword} element={<ResetPasswordPage />} />
      <Route path="*" element={<Navigate replace to={authRoutes.signIn} />} />
    </Routes>
  )
}
