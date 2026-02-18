import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import MainLayout from "../../shared/components/layout/MainLayout"
import AdminLayout from "../../shared/components/layout/AdminLayout"
// import ProtectedRoute from "./ProtectedRoute"
// import AdminRoute from "./AdminRoute"

const HomePage = lazy(() => import("../../features/home/pages/HomePage"))
const AboutPage = lazy(() => import("../../features/about/pages/AboutPage"))
const ProductsPage = lazy(() => import("../../features/products/pages/ProductsPage"))
const ProductDetailsPage = lazy(() => import("../../features/products/pages/ProductDetailsPage"))
const ContactPage = lazy(() => import("../../features/contact/pages/ContactPage"))
const LoginPage = lazy(() => import("../../features/auth/pages/LoginPage"))
const SignupPage = lazy(() => import("../../features/auth/pages/SignupPage"))
const DashboardPage = lazy(() => import("../../features/admin/pages/DashboardPage"))
const ProductsManagement = lazy(() => import("../../features/admin/pages/ProductsManagement"))
const OrdersPage = lazy(() => import("../../features/admin/pages/OrdersPage"))
const OverviewPage = lazy(() => import("../../features/admin/pages/OverviewPage"))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Admin */}
        {/* <Route element={<ProtectedRoute />}>
          <Route element={<AdminRoute />}> */}
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<DashboardPage />} />
              <Route path="/admin/dashboard/products" element={<ProductsManagement />} />
            </Route>
          {/* </Route>
        </Route> */}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
