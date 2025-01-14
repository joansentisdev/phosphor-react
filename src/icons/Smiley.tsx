/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (
  weight: string,
  color: string
): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="92" cy="108" r="16" />
          <circle cx="164" cy="108" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm84.5,60.00781a56.20543,56.20543,0,0,1-26.6875,23.58594A56.0807,56.0807,0,0,1,79.5,156.00781a7.99843,7.99843,0,1,1,13.84375-8.01562,40.274,40.274,0,0,0,19.09375,16.86719,40.44532,40.44532,0,0,0,31.14062,0,40.0058,40.0058,0,0,0,12.70313-8.57813,40.82317,40.82317,0,0,0,6.375-8.28906A7.99843,7.99843,0,1,1,176.5,156.00781Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="92" cy="108" r="10" />
          <circle cx="164" cy="108" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="92" cy="108" r="8" />
          <circle cx="164" cy="108" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Smiley = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Smiley.displayName = "Smiley";

export default Smiley;
