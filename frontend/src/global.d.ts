//////////////////////////////////////////////
// TO HAVE .scss SUPPORT TRHOUGHOUT THE APP //
//////////////////////////////////////////////

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss";
