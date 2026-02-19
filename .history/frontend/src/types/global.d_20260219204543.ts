declare module "*.css"
declare module "*.scss"
declare module "*.sass"

declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}