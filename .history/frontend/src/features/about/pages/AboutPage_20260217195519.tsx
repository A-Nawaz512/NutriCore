import { FC } from "react"
import Button from "../../../shared/components/ui/Button"
import Featured01 from "../../../assets/Home/Featured01.jpg"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import CallToActionSection from "../components/CallToActionSection"

const AboutSection: FC = () => {
    return (
        <>
            <HeroSection />
            <section className="py-20 bg-gray-50">
                <div className="container  mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Image */}
                    <div className="lg:w-1/2 relative h-[100vh]">
                        <img
                            src={Featured01}
                            alt="NutriCore Supplements"
                            className="rounded-xl shadow-lg w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-[#25492D] mb-6">
                            Discover NutriCore Supplements
                        </h2>
                        <p className="text-gray-700 text-lg mb-4">
                            At NutriCore, we provide **high-quality daily supplements** for energy, immunity, and overall wellness. Each product is **carefully formulated** to help you maintain a healthy lifestyle.
                        </p>

                        {/* How to Purchase */}
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-[#25492D] mb-4">
                                How to Purchase
                            </h3>
                            <ul className="space-y-3 text-gray-700">
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
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => (window.location.href = "/products")}
                            >
                                Shop Supplements
                            </Button>
                            <Button
                                variant="outline"
                                size="md"
                                onClick={() => (window.location.href = "/contact")}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturesSection/>
            {/* <CallToActionSection/> */}
        </>
    )
}

export default AboutSection
