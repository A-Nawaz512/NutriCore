{/* LEFT BRAND SECTION */}
<div className="hidden lg:flex w-1/2 relative text-white overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg')",
    }}
  />

  {/* Dark Green Overlay */}
  <div className="absolute inset-0 bg-[#25492D]/80" />

  {/* Content */}
  <div className="relative z-10 max-w-md px-16 py-20 flex flex-col justify-center">
    <h1 className="text-4xl font-bold mb-6 leading-tight">
      Join NutriCore
    </h1>

    <p className="text-green-100 text-lg leading-relaxed">
      Start your journey toward a healthier lifestyle with premium supplements
      and personalized wellness solutions.
    </p>

    <div className="mt-10 space-y-5">
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
          ✔
        </div>
        <span className="text-white/90">
          Premium Quality Products
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
          ✔
        </div>
        <span className="text-white/90">
          Fast & Secure Checkout
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
          ✔
        </div>
        <span className="text-white/90">
          Expert Health Support
        </span>
      </div>
    </div>
  </div>
</div>
