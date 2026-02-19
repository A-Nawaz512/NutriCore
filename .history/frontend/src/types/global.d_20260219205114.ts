// src/types/global.d.ts

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
