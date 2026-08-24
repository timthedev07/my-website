import { forwardRef, SVGProps } from "react";
import { siNestjs, siMysql, siPrisma, siReact } from "simple-icons";

type SimpleIcon = { path: string; hex: string };

const BrandSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement> & { icon: SimpleIcon; title: string }>(
  ({ icon, title, ...props }, ref) => (
    <svg ref={ref} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{title}</title>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  )
);

BrandSVG.displayName = "BrandSVG";

export const ReactNativeSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <BrandSVG ref={ref} icon={siReact} title="React Native" {...props} />
);
export const MySQLSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <BrandSVG ref={ref} icon={siMysql} title="MySQL" {...props} />
);
export const NestJSSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <BrandSVG ref={ref} icon={siNestjs} title="NestJS" {...props} />
);
export const PrismaSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <BrandSVG ref={ref} icon={siPrisma} title="Prisma" {...props} />
);

ReactNativeSVG.displayName = "ReactNative";
MySQLSVG.displayName = "MySQL";
NestJSSVG.displayName = "NestJS";
PrismaSVG.displayName = "Prisma";
