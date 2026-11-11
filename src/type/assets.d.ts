declare module "*.svg?react" {
  import React from "react";
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
declare module "*.png" {
  const content: string;
  export default content;
}
