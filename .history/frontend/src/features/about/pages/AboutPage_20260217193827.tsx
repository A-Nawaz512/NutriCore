import { FC } from "react"
import Button from "../../../shared/components/ui/Button"

const AboutSection: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image / Visual */}
        <div className="md:w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"
            alt="NutriCore Supplements"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#25492D] mb-6">
            About NutriCore
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            NutriCore is committed to providing **premium daily-use supplements** to support your overall wellness. From energy boosters to immunity support, our products are crafted with **quality ingredients** to help you live a healthier life.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Ordering is simple: browse our collection, select your preferred supplement, and have it **delivered safely to your doorstep**. We ensure fast, secure shipping with trusted packaging.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-[#25492D] rounded-full mt-2"></div>
              <p className="text-gray-700 font-medium">Certified, High-Quality Ingredients</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-[#25492D] rounded-full mt-2"></div>
              <p className="text-gray-700 font-medium">Quick & Secure Delivery</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-[#25492D] rounded-full mt-2"></div>
              <p className="text-gray-700 font-medium">Easy Online Purchase</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-[#25492D] rounded-full mt-2"></div>
              <p className="text-gray-700 font-medium">Customer Support You Can Trust</p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/products")}
            >
              Shop Now
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
  )
}

export default AboutSection
