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
          <rect
            x="-6"
            y="102"
            width="176"
            height="52"
            rx="8"
            transform="translate(210 46) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="86"
            y="102"
            width="176"
            height="52"
            rx="8"
            transform="translate(302 -46) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="-4"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(212 44) rotate(90)"
            opacity="0.2"
          />
          <rect
            x="84"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            opacity="0.2"
          />
          <rect
            x="-4"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(212 44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="84"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M120,48V208a16.01833,16.01833,0,0,1-16,16H64a16.01833,16.01833,0,0,1-16-16V48A16.01833,16.01833,0,0,1,64,32h40A16.01833,16.01833,0,0,1,120,48Zm72-16H152a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="-4"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(212 44) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="84"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect
            x="-4"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(212 44) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="84"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect
            x="-4"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(212 44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="84"
            y="100"
            width="176"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Columns = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Columns.displayName = "Columns";

export default Columns;
