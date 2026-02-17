import { FC } from "react"

const FeaturesSection: FC = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 md:px-16 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#25492D] mb-12">
        Why Choose NutriCore?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex hover:shadow-2xl p-3 rounded-2xl flex-col items-center transition transform hover:-translate-y-1 duration-300">
          <div className="bg-[#25492D] text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-4 font-bold text-lg sm:text-xl">
            ✓
          </div>
          <p className="font-medium text-gray-700 text-sm sm:text-base">Certified Ingredients</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center transition transform hover:-translate-y-1 duration-300">
          <div className="bg-[#25492D] text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-4 font-bold text-lg sm:text-xl">
            ⚡
          </div>
          <p className="font-medium text-gray-700 text-sm sm:text-base">Fast Delivery</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center transition transform hover:-translate-y-1 duration-300">
          <div className="bg-[#25492D] text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-4 font-bold text-lg sm:text-xl">
            🛡️
          </div>
          <p className="font-medium text-gray-700 text-sm sm:text-base">Secure Payment</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center transition transform hover:-translate-y-1 duration-300">
          <div className="bg-[#25492D] text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-4 font-bold text-lg sm:text-xl">
            💬
          </div>
          <p className="font-medium text-gray-700 text-sm sm:text-base">24/7 Support</p>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection
