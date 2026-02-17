import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Button from "../../../shared/components/ui/Button"
import Home01 from "../../../assets/Home/Home01.jpg"
import Home02 from "../../../assets/Home/Home02.jpg"
import Home03 from "../../../assets/Home/Home03.jpg"

const slides = [
  {
    title: "Daily Health, Simplified",
    description: "NutriCore supplements for energy, immunity, and overall wellness.",
    img: Home01,
    btnText: "Shop Now",
    btnLink: "/products",
  },
  {
    title: "Fast & Secure Delivery",
    description: "Get your favorite supplements delivered to your doorstep quickly and safely.",
    img: Home02,
    btnText: "Explore Delivery",
    btnLink: "/delivery",
  },
  {
    title: "Premium Quality Products",
    description: "Certified vitamins, protein powders, and wellness boosters to support your lifestyle.",
    img: Home03,
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
        loop={true}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet w-4 h-4 bg-white/50 rounded-full mx-1 transition-all duration-300",
          bulletActiveClass: "swiper-pagination-bullet-active bg-white",
        }}
        navigation={true}
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Text Content */}
              <div className="relative md:w-1/2 z-10 text-white max-w-lg text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                  {slide.title}
                </h2>
                <p className="mb-6 text-base md:text-lg text-gray-100">
                  {slide.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => (window.location.href = slide.btnLink)}
                  >
                    {slide.btnText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            width: 3rem;
            padding : 10px;
            height: 3rem;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.3);
            color: white;
            transition: all 0.3s ease;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: rgba(255,255,255,0.7);
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.25rem;
            font-weight: bold;
          }
        `}
      </style>
    </section>
  )
}

export default HeroSection
