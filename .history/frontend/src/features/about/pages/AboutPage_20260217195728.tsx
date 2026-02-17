import { FC } from "react"
import Button from "../../../shared/components/ui/Button"
import Featured01 from "../../../assets/Home/Featured01.jpg"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"

const AboutSection: FC = () => {
    return (
        <>
            <HeroSection />
            <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12">
    {/* Left Image */}
    <div className="lg:w-1/2 w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] relative">
      <img
        src={Featured01}
        alt="NutriCore Supplements"
        className="rounded-xl shadow-lg w-full h-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#25492D] mb-6">
        Discover NutriCore Supplements
      </h2>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6">
        At NutriCore, we provide <strong>high-quality daily supplements</strong> for energy, immunity, and overall wellness. Each product is <strong>carefully formulated</strong> to help you maintain a healthy lifestyle.
      </p>

      {/* How to Purchase */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#25492D] mb-4">
          How to Purchase
        </h3>
        <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
          <li>
            <span className="font-semibold">1. Browse Products:</span> Explore our curated selection of vitamins, protein powders, and wellness boosters.
          </li>
          <li>
            <span className="font-semibold">2. Add to Cart:</span> Choose the quantity and add your supplements to the cart.
          </li>
          <li>
            <span className="font-semibold">3. Checkout Securely:</span> Complete your order with our fast, secure payment process.
          </li>
          <li>
            <span className="font-semibold">4. Fast Delivery:</span> Receive your products at your doorstep quickly and safely.
          </li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button
          variant="primary"
          size="lg"
          onClick={() => (window.location.href = "/products")}
        >
          Shop Supplements
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  </div>
</section>


            <FeaturesSection/>
        </>
    )
}

export default AboutSection
