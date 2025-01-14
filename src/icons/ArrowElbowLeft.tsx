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
            points="96 80 24 80 24 152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="232 96 136 192 24 80"
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
            points="96 80 24 80 24 152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="232 96 136 192 24 80"
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
          <path d="M237.65723,90.34277a8.003,8.003,0,0,0-11.31446,0L136,180.68652,43.31445,88H96a8,8,0,0,0,0-16H24c-.05981,0-.11743.00757-.177.00891-.20264.00452-.40528.01087-.60718.03064-.13818.01343-.27246.03857-.40845.059-.12207.01831-.24487.03186-.36621.05591-.14526.02869-.28613.06811-.42846.10461-.11036.0282-.22168.05213-.3313.08521-.1355.041-.26661.09155-.39917.1394-.11426.04126-.22925.07862-.3418.12525-.11963.04956-.23462.10766-.35132.16284-.1206.05688-.24219.11059-.36035.17383-.10645.05688-.20752.12182-.311.18359-.12133.072-.24389.14087-.36206.22-.1062.071-.20581.15051-.3081.22644-.10767.07971-.21729.15466-.32178.24048-.14477.119-.28076.24792-.417.37671-.05444.05151-.11255.09668-.166.15-.05639.0564-.10424.11792-.15869.17554-.12524.13281-.25122.26538-.36719.40649-.09106.11072-.17114.22718-.25537.34156-.07055.0957-.14477.188-.21093.28686-.085.12659-.15894.25782-.23584.38806-.05567.09436-.11524.18616-.16724.28309-.06909.12915-.12817.26184-.1897.39379-.04931.10547-.102.20874-.147.31665-.05225.12647-.095.25562-.14063.38428-.042.11817-.08764.2345-.12426.35523-.03907.1289-.06787.25976-.10034.39013-.03052.12305-.06519.24414-.09009.36939-.03.15136-.04859.30444-.06983.457-.01465.106-.03515.21-.04565.31714a7.97965,7.97965,0,0,0-.04.79712V152a8,8,0,0,0,16,0V99.31445l98.34277,98.34278a8.00181,8.00181,0,0,0,11.31446,0l96-96A8.00122,8.00122,0,0,0,237.65723,90.34277Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="96 80 24 80 24 152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="232 96 136 192 24 80"
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
            points="96 80 24 80 24 152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="232 96 136 192 24 80"
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
            points="96 80 24 80 24 152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="232 96 136 192 24 80"
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

const ArrowElbowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowElbowLeft.displayName = "ArrowElbowLeft";

export default ArrowElbowLeft;
