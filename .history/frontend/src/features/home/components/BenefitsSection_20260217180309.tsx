import { FC } from "react"
import { ShieldCheck, Heart } from "lucide-react"
import { BsLightning } from "react-icons/bs";
import Card from "../../../shared/components/ui/Card"

const benefits = [
  { icon: <ShieldCheck />, title: "Immune Support", description: "Boost your immunity daily with essential vitamins." },
  { icon: <Heart />, title: "Heart Health", description: "Maintain a healthy heart and improve circulation." },
  { icon: <BsFillLightningFill />, title: "Energy Boost", description: "Stay active and energized throughout the day." },
]

const BenefitsSection: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose NutriCore?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="flex flex-col items-center text-center p-6">
              <div className="text-blue-800 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
