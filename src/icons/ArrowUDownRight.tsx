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
            points="176 120 224 168 176 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M176,56H88a56,56,0,0,0-56,56v.00011A55.99988,55.99988,0,0,0,87.99989,168H224"
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
            points="176 120 224 168 176 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M176,56H88a56,56,0,0,0-56,56v.00011A55.99988,55.99988,0,0,0,87.99989,168H224"
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
          <path d="M230.18481,173.07324c.0857-.10449.16065-.21386.24024-.32129.07544-.102.15454-.20117.22534-.30664.08276-.12353.155-.25195.23023-.3789.05761-.09717.11889-.1919.17236-.29151.06811-.12744.12646-.25879.18725-.38916.05-.10644.10352-.21142.14893-.3208.05225-.126.09448-.25439.13989-.38232.04248-.11866.08814-.23584.125-.35694.03882-.12841.06763-.25879.09986-.38916.03076-.123.06567-.24511.09057-.3706.03-.15137.04859-.3042.06983-.457.01464-.106.03515-.20948.04565-.3169a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10742-.031-.21094-.04565-.3169-.02124-.15283-.0398-.30566-.06983-.457-.0249-.12549-.05981-.24756-.09057-.3706-.03223-.13037-.061-.26075-.09986-.38916-.03686-.1211-.08252-.23828-.125-.35694-.04541-.12793-.08764-.25634-.13989-.38232-.04541-.10938-.09888-.21436-.14893-.3208-.06079-.13037-.11914-.26172-.18725-.38916-.05347-.09961-.11475-.19434-.17236-.29151-.0752-.127-.14747-.25537-.23023-.3789-.0708-.10547-.1499-.20459-.22534-.30664-.07959-.10743-.15454-.2168-.24024-.32129-.1394-.16992-.28881-.33057-.44165-.48828-.02978-.03125-.05542-.06494-.08593-.09522l-48-48a8.00018,8.00018,0,1,0-11.31446,11.31348L204.68652,160H88a48,48,0,0,1,0-96h88a8,8,0,0,0,0-16H88a64,64,0,0,0,0,128H204.68652l-34.34375,34.34326a8.00018,8.00018,0,0,0,11.31446,11.31348l48-48c.03344-.0332.06128-.06983.094-.104C229.90088,173.398,230.04785,173.23975,230.18481,173.07324Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="176 120 224 168 176 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M176,56H88a56,56,0,0,0-56,56v.00011A55.99988,55.99988,0,0,0,87.99989,168H224"
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
            points="176 120 224 168 176 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M176,56H88a56,56,0,0,0-56,56v.00011A55.99988,55.99988,0,0,0,87.99989,168H224"
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
            points="176 120 224 168 176 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M176,56H88a56,56,0,0,0-56,56v.00011A55.99988,55.99988,0,0,0,87.99989,168H224"
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

const ArrowUDownRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowUDownRight.displayName = "ArrowUDownRight";

export default ArrowUDownRight;
