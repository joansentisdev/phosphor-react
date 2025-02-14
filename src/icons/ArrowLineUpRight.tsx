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
          <line
            x1="80"
            y1="168"
            x2="192"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="192 156 192 56 92 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="40"
            y1="215.99627"
            x2="216"
            y2="215.99627"
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
          <line
            x1="80"
            y1="168"
            x2="192"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 156 192 56 92 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="215.99627"
            x2="216"
            y2="215.99627"
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
          <path d="M74.34277,173.65674a8,8,0,0,1,0-11.31348L172.68652,64H92a8,8,0,0,1,0-16H192c.02979,0,.05859.00415.08838.00446.2334.00256.46631.01245.69824.03527.12891.01264.2544.03632.38135.055.13086.01928.26269.03418.39258.05993.14111.0279.27783.06635.416.1015.11426.02912.22949.054.34326.08826.13477.04083.26514.09113.397.1388.11425.04126.22949.07873.34228.12536.12256.05072.24024.11017.35938.16675.11718.05548.23584.10754.35058.169.11475.06121.22315.13079.33448.19732.11279.06763.227.13135.33691.205.12353.08234.23975.17389.35791.26282.09033.068.18311.13067.27148.203a8.04368,8.04368,0,0,1,1.1167,1.11694c.07618.09217.1416.1894.21289.28406.08545.1142.17383.22595.25342.34473.07617.11395.14209.23224.21192.34912.064.10693.13134.21142.18994.32153.064.11933.11816.24213.17529.364.0542.115.11182.22809.16064.346.04883.11817.08838.23883.13135.35877.04541.12622.09375.25073.13282.37976.03662.12073.06347.24341.09423.36535.03272.131.06934.26044.09571.39393.02783.14038.04443.28216.06494.42352.0166.11694.03906.232.05029.35052.02588.26245.04.52582.04.78931V156a8,8,0,0,1-16,0V75.31372l-98.34277,98.343a8.00063,8.00063,0,0,1-11.31446,0ZM216,207.99609H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="80"
            y1="168"
            x2="192"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="192 156 192 56 92 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40"
            y1="215.99627"
            x2="216"
            y2="215.99627"
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
          <line
            x1="80"
            y1="168"
            x2="192"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="192 156 192 56 92 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40"
            y1="215.99627"
            x2="216"
            y2="215.99627"
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
          <line
            x1="80"
            y1="168"
            x2="192"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 156 192 56 92 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="215.99627"
            x2="216"
            y2="215.99627"
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

const ArrowLineUpRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowLineUpRight.displayName = "ArrowLineUpRight";

export default ArrowLineUpRight;
