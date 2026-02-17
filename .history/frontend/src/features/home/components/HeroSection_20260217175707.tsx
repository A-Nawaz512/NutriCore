import { FC } from "react"
import Button from "@/shared/components/ui/Button"

const HeroSection: FC = () => {
  return (
    <section className="bg-blue-800 text-white rounded-lg overflow-hidden relative mb-12">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Daily Health, Simplified
          </h1>
          <p className="mb-6 text-lg md:text-xl text-gray-200">
            NutriCore supplements for energy, immunity, and overall wellness.
          </p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"
            alt="Supplements"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
