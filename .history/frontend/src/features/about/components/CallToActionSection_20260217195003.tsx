import { FC } from "react"
import Button from "../../../shared/components/ui/Button"

const CallToActionSection: FC = () => (
  <section className="py-20 bg-[#25492D] text-white text-center rounded-lg mx-6 md:mx-16 my-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Boost Your Health?
    </h2>
    <p className="text-gray-100 mb-8">
      Explore our full range of daily supplements and start your wellness journey today.
    </p>
    <Button variant="primary" size="lg" onClick={() => (window.location.href = "/products")}>
      Shop Now
    </Button>
  </section>
)

export default CallToActionSection
