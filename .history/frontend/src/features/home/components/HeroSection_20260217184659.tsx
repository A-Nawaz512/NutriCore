import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Button from "../../../shared/components/ui/Button"

const slides = [
  {
    title: "Daily Health, Simplified",
    description: "NutriCore supplements for energy, immunity, and overall wellness.",
    img: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
    btnText: "Shop Now",
    btnLink: "/products",
  },
  {
    title: "Fast & Secure Delivery",
    description: "Get your favorite supplements delivered to your doorstep quickly and safely.",
    img: "https://images.pexels.com/photos/586177/pexels-photo-586177.jpeg",
    btnText: "Explore Delivery",
    btnLink: "/delivery",
  },
  {
    title: "Premium Quality Products",
    description: "Certified vitamins, protein powders, and wellness boosters to support your lifestyle.",
    img: "https://images.pexels.com/photos/3861940/pexels-photo-3861940.jpeg",
    btnText: "View Products",
    btnLink: "/products",
  },
]

const HeroSection: FC = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="w-full h-[600px] md:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-blue-800 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 rounded-lg overflow-hidden">
              {/* Text Content */}
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg md:text-xl text-gray-200">
                  {slide.description}
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => (window.location.href = slide.btnLink)}
                >
                  {slide.btnText}
                </Button>
              </div>

              {/* Image */}
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg shadow-xl w-full md:w-auto max-w-md object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/30 pointer-events-none"></div>
    </section>
  )
}

export default HeroSection
