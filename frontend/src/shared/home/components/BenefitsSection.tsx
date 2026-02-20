import type { FC } from "react"
import { ShieldCheck, Heart, Zap, Leaf, Award, Clock } from "lucide-react"

const benefits = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Immune Support",
    description: "Boost your immunity daily with essential vitamins and minerals.",
    bg: "bg-green-50",
    iconColor: "text-[#25492D]",
  },
  {
    icon: <Heart size={28} />,
    title: "Heart Health",
    description: "Maintain a healthy heart and improve circulation with Omega-3.",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: <Zap size={28} />,
    title: "Energy Boost",
    description: "Stay active and energized throughout the day with B-Complex.",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: <Leaf size={28} />,
    title: "Natural Ingredients",
    description: "All supplements made from natural, certified, and pure ingredients.",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: <Award size={28} />,
    title: "GMP Certified",
    description: "Manufactured in GMP-certified facilities for guaranteed quality.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <Clock size={28} />,
    title: "Fast Delivery",
    description: "Get your supplements delivered to your doorstep within 2-3 days.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
]

const BenefitsSection: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#25492D]">NutriCore</span>?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We are committed to providing the highest quality supplements to support your health journey.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className={`${benefit.bg} ${benefit.iconColor} p-3 rounded-xl mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
