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
            points="136 176 88 224 40 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M200,176V88a56,56,0,0,0-56-56h-.00011A55.99988,55.99988,0,0,0,88,87.99989V224"
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
            points="136 176 88 224 40 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,176V88a56,56,0,0,0-56-56h-.00011A55.99988,55.99988,0,0,0,88,87.99989V224"
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
          <path d="M144,24A64.07207,64.07207,0,0,0,80,88V204.686L45.65723,170.34326a8.00018,8.00018,0,0,0-11.31446,11.31348l48,48c.02393.02392.05054.04394.075.06787.16407.15967.33252.31494.50977.46045.09961.082.20435.15332.30664.22949.10693.07959.21118.1626.322.23682.11914.07959.24219.14843.36426.22119.102.061.20166.125.30664.18115.1228.06592.249.12158.37451.18066.11182.05274.22144.1084.33594.15577.12061.0498.24341.09033.36572.13379.124.04443.24658.09228.37354.13086.12231.03662.24658.064.37036.09521.12939.03223.25708.06885.38891.09473.14209.02832.28565.04492.429.06543.11523.0166.22852.03857.34546.0498.26245.02588.52588.04.78955.04s.5271-.01416.78955-.04c.11694-.01123.23023-.0332.34546-.0498.14331-.02051.28686-.03711.429-.06543.13184-.02588.25953-.0625.38892-.09473.12378-.03125.24805-.05859.37036-.09521.127-.03858.24951-.08643.37354-.13086.12231-.04346.24511-.084.36572-.13379.1145-.04737.22412-.103.33594-.15577.12549-.05908.25171-.11474.37451-.18066.105-.05615.20459-.12012.30664-.18115.12207-.07276.24512-.1416.36426-.22119.11084-.07422.21509-.15723.322-.23682.10229-.07617.207-.14746.30664-.22949.17725-.14551.3457-.30078.50977-.46045.02441-.02393.051-.044.075-.06787l48-48a8.00018,8.00018,0,0,0-11.31446-11.31348L96,204.686V88a48,48,0,0,1,96,0v88a8,8,0,0,0,16,0V88A64.07207,64.07207,0,0,0,144,24Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="136 176 88 224 40 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M200,176V88a56,56,0,0,0-56-56h-.00011A55.99988,55.99988,0,0,0,88,87.99989V224"
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
            points="136 176 88 224 40 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M200,176V88a56,56,0,0,0-56-56h-.00011A55.99988,55.99988,0,0,0,88,87.99989V224"
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
            points="136 176 88 224 40 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,176V88a56,56,0,0,0-56-56h-.00011A55.99988,55.99988,0,0,0,88,87.99989V224"
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

const ArrowULeftDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowULeftDown.displayName = "ArrowULeftDown";

export default ArrowULeftDown;
