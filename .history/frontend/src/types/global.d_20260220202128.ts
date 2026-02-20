// src/types/global.d.ts

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/effect-fade";
// CSS modules
declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

// SCSS/SASS modules
declare module "*.scss" {
  const content: { [className: string]: string }
  export default content
}
declare module "*.sass" {
  const content: { [className: string]: string }
  export default content
}

// Images
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
declare module "*.gif"

// Fonts
declare module "*.woff"
declare module "*.woff2"
declare module "*.ttf"
declare module "*.eot"
