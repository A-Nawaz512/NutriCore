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
    <section className="relative w-full h-[80vh] overflow-hidden rounded-lg">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative md:w-1/2 z-10 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg md:text-xl text-gray-100">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
