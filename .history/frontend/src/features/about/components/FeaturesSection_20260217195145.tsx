import { FC } from "react"

const FeaturesSection: FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-[#25492D] mb-12">Why Choose NutriCore?</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center hover:shadow-2xl">
          <div className="bg-[#25492D] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 font-bold text-xl">✓</div>
          <p className="font-medium text-gray-700">Certified Ingredients</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#25492D] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 font-bold text-xl">⚡</div>
          <p className="font-medium text-gray-700">Fast Delivery</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#25492D] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 font-bold text-xl">🛡️</div>
          <p className="font-medium text-gray-700">Secure Payment</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#25492D] text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 font-bold text-xl">💬</div>
          <p className="font-medium text-gray-700">24/7 Support</p>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection
