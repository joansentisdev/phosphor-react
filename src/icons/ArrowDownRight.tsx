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
            x1="64"
            y1="64"
            x2="192"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="88 192 192 192 192 88"
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
            x1="64"
            y1="64"
            x2="192"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="88 192 192 192 192 88"
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
          <path d="M198.40967,196.772c.08154-.10888.166-.21582.24219-.3291.07763-.11621.1455-.2373.2163-.35644.0625-.105.12842-.207.186-.315.06445-.11962.11865-.24316.17627-.36572.0542-.11474.11133-.227.16015-.34472.04883-.11719.0879-.23682.13038-.356.04589-.12744.09423-.25293.13379-.3833.03613-.11914.0625-.23975.09277-.35987.03369-.13281.0708-.26367.09717-.39892.02783-.13819.04394-.27783.064-.41748.01709-.11914.03955-.23633.05127-.35694q.03809-.38232.03906-.7666L200,192V88a8,8,0,0,0-16,0v84.686L69.65674,58.34277A8.00018,8.00018,0,0,0,58.34326,69.65723L172.686,184H88a8,8,0,0,0,0,16H192c.26367,0,.52686-.01416.78955-.04.11914-.01172.23486-.03369.353-.05078.14013-.02.28076-.03662.42041-.064.13428-.02685.26513-.064.397-.09716.12109-.03028.24268-.05713.36231-.09326.1289-.03907.2539-.08741.37988-.13282.12012-.043.24121-.08252.35937-.13135.1167-.04882.229-.10546.34327-.15966.12255-.05762.24658-.11231.36669-.17676.10791-.05762.21-.12305.31446-.18555.11963-.07129.24072-.13867.35693-.21679.11279-.07569.21924-.15967.32764-.24073.10058-.07519.2041-.14551.30176-.22558.17822-.14649.34765-.30225.51269-.46338.023-.023.04883-.042.07178-.06494.02-.02051.03711-.04248.05713-.063.16406-.16748.32275-.34082.47168-.522C198.26562,196.97461,198.335,196.87207,198.40967,196.772Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="64"
            y1="64"
            x2="192"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="88 192 192 192 192 88"
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
            x1="64"
            y1="64"
            x2="192"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="88 192 192 192 192 88"
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
            x1="64"
            y1="64"
            x2="192"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="88 192 192 192 192 88"
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

const ArrowDownRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowDownRight.displayName = "ArrowDownRight";

export default ArrowDownRight;
