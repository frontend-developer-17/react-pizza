declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}
declare module "*.svg" {
    const path: string;
    export default path;
}
declare module "*.module.css" {
    const classes: { [key: string]: string}
    export default classes
}

declare module "*.module.scss" {
    const classes: { [key: string]: string}
    export default classes
}