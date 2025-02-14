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
          <polyline
            points="80 120 32 168 80 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <polyline
            points="80 120 32 168 80 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M168,48H80a8,8,0,0,0,0,16h88a48,48,0,0,1,0,96H51.31348l34.34375-34.34326a8.00018,8.00018,0,0,0-11.31446-11.31348l-48,48c-.02392.02393-.04394.05078-.06762.07471-.15967.16406-.31495.332-.46021.50928-.08423.10254-.15771.21045-.23608.31591-.07715.10352-.15747.20459-.22949.312-.082.12255-.15333.24951-.22779.375-.05859.09863-.12036.19433-.17456.29541-.06811.12695-.12573.25732-.18652.38671-.0503.10743-.10425.2129-.1499.32325-.052.12549-.094.25341-.13941.38086-.04248.11914-.08838.23632-.12524.35791-.03882.12841-.06763.25927-.09986.38916-.03076.123-.06567.24511-.09057.3706-.03.15088-.04859.30371-.06958.45654-.0149.106-.0354.21-.0459.31739a8.02276,8.02276,0,0,0,0,1.584c.0105.10742.031.21143.0459.31738.021.15284.03955.30567.06958.45655.0249.12549.05981.24756.09057.3706.03223.12989.061.26075.09986.38916.03686.12159.08276.23877.12524.35791.04541.12745.0874.25537.13941.38086.04565.11035.0996.21582.1499.32325.06079.12939.11841.25976.18652.38671.0542.10108.116.19678.17456.29541.07446.12549.14575.25245.22779.375.072.10743.15234.2085.22949.312.07837.10546.15185.21337.23608.31591.14258.17383.29517.33887.45166.49952.02661.02734.04907.05761.07617.08447l48,48a8.00018,8.00018,0,1,0,11.31446-11.31348L51.31348,176H168a64,64,0,0,0,0-128Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="80 120 32 168 80 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <polyline
            points="80 120 32 168 80 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <polyline
            points="80 120 32 168 80 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
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

const ArrowUDownLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowUDownLeft.displayName = "ArrowUDownLeft";

export default ArrowUDownLeft;
