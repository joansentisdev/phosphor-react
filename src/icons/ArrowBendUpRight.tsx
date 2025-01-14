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
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,200a96,96,0,0,1,96-96h96"
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
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,200a96,96,0,0,1,96-96h96"
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
          <path d="M230.18311,109.0752c.09106-.11084.17114-.22706.25537-.34156.07055-.0957.14477-.188.21093-.28686.085-.12647.15894-.25782.23584-.38819.05567-.09423.11524-.186.16724-.283.06909-.12915.12817-.262.1897-.39379.04931-.10547.10205-.20874.147-.31665.05225-.12647.095-.25562.14063-.38428.042-.11817.08764-.23462.12426-.35523.03907-.1289.06787-.25976.10034-.39013.03052-.12305.06519-.24414.09009-.36939.03-.15137.04859-.30444.06983-.457.01465-.106.03515-.21.04565-.31714a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10718-.031-.21118-.04565-.31714-.02124-.15259-.0398-.30567-.06983-.457-.0249-.12525-.05957-.24634-.09009-.36939-.03247-.13037-.06127-.26123-.10034-.39013-.03662-.12061-.08227-.23706-.12426-.35523-.04566-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.13183-.12061-.26464-.1897-.39379-.052-.09693-.11157-.18873-.16724-.283-.0769-.13037-.15088-.26172-.23584-.38819-.06616-.09887-.14038-.19116-.21093-.28686-.08423-.1145-.16431-.23072-.25537-.34156-.116-.14111-.242-.27368-.36719-.40649-.05445-.05762-.1023-.11914-.15869-.17554l-48-48a8.00053,8.00053,0,0,0-11.31446,11.31446L204.68628,96H128A104.11791,104.11791,0,0,0,24,200a8,8,0,0,0,16,0,88.09957,88.09957,0,0,1,88-88h76.68628l-34.34351,34.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l48-48c.05639-.0564.10424-.11792.15869-.17554C229.94116,109.34888,230.06714,109.21631,230.18311,109.0752Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,200a96,96,0,0,1,96-96h96"
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
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,200a96,96,0,0,1,96-96h96"
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
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,200a96,96,0,0,1,96-96h96"
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

const ArrowBendUpRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowBendUpRight.displayName = "ArrowBendUpRight";

export default ArrowBendUpRight;
