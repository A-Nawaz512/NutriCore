import { FC } from "react"
import HeroSection from "../components/HeroSection"
import BenefitsSection from "../components/BenefitsSection"
import FeaturedProducts from "../components/FeaturedProducts"

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedProducts />
    </>
  )
}

export default HomePage
