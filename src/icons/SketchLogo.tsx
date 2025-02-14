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
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
          <polygon
            points="184 40 128 40 78.909 104 128 224 240 104 184 40"
            opacity="0.2"
          />
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
          <path d="M246.48828,108.6676c.07129-.09924.14307-.19824.21-.30084.07324-.11182.14014-.22607.207-.34064.06006-.10333.1211-.20593.17676-.31213.062-.11768.11719-.23749.17236-.35748.05127-.11.10352-.21894.14942-.33155.0498-.12121.09131-.24438.13476-.36737.04053-.11541.084-.22925.11914-.347.041-.13526.07178-.2724.10547-.40924.02637-.1084.05762-.21479.07959-.32483q.074-.3673.1128-.73932c.00634-.06189.00634-.12543.01172-.18774.01562-.19642.02832-.39289.02978-.58985,0-.02008.00293-.03949.00293-.05963,0-.0733-.00879-.14429-.01074-.2171-.00488-.16461-.01074-.329-.02539-.49317-.00977-.11059-.02442-.21936-.03907-.32867-.01806-.14069-.03808-.28082-.064-.42059-.022-.11872-.04736-.23578-.07471-.35254-.02978-.12781-.062-.25482-.09814-.38141q-.05054-.17909-.10938-.35437c-.041-.12146-.08545-.24152-.13232-.36139-.04492-.11554-.09131-.23023-.1416-.34308-.05225-.11774-.10987-.23334-.168-.349-.05567-.1098-.11133-.21918-.17139-.326-.063-.11181-.13183-.22107-.20068-.33044-.0669-.10584-.1333-.21155-.20459-.31391-.07178-.1029-.14942-.20275-.22656-.303-.07911-.10236-.15772-.20478-.24121-.30317-.02491-.02948-.04639-.061-.07178-.09027l-56-64A8.001,8.001,0,0,0,184,32H72a8.001,8.001,0,0,0-6.02051,2.73193l-56,64c-.02539.02924-.04687.06079-.07178.09034-.08349.09832-.1621.20074-.24121.3031-.07714.10022-.15478.20007-.22656.303-.07129.10236-.13769.20807-.20459.31391-.06885.10937-.13769.21863-.20068.33044-.06006.10681-.11572.21619-.17139.326-.0581.11566-.11572.23126-.168.349-.05029.11285-.09668.22754-.1416.34308-.04687.11987-.09131.23993-.13232.36139q-.05861.1755-.10938.35437c-.03613.12659-.06836.2536-.09814.38141-.02735.11676-.05274.23382-.07471.35254-.02588.13977-.0459.2799-.064.42059-.01465.10931-.0293.21808-.03907.32867-.01465.16419-.02051.32856-.02539.49317C8.00879,103.85571,8,103.9267,8,104c0,.02014.00293.03955.00293.05963.00146.197.01416.39343.02978.58985.00538.06231.00538.12585.01172.18774q.03882.3717.1128.73932c.022.11.05322.21643.07959.32483.03369.13684.06445.274.10547.40924.03515.11773.07861.23157.11914.347.04345.123.085.24616.13476.36737.0459.11261.09815.22156.14942.33155.05517.12.11035.2398.17236.35748.05566.1062.1167.2088.17676.31213.06689.11457.13379.22882.207.34064.06689.1026.13867.2016.21.30084.07617.10541.15234.21033.23389.31275.07959.09961.16308.19525.24707.29089.0542.06177.10253.12683.15869.18726l112,120c.11377.12164.2373.23126.35742.34491.05615.05316.1084.10949.1665.16095a8.01052,8.01052,0,0,0,.81006.63409c.06348.04364.13037.08154.19531.12329a7.97782,7.97782,0,0,0,.7295.416c.081.041.16113.08313.24414.1214a8.00691,8.00691,0,0,0,.96045.37481c.04736.015.09716.02417.145.03821a7.98871,7.98871,0,0,0,.89062.20343c.09424.01617.18848.03143.28369.04419a7.12355,7.12355,0,0,0,2.13184,0c.09521-.01276.18945-.028.28369-.04419a7.98871,7.98871,0,0,0,.89062-.20343c.04786-.014.09766-.02325.145-.03821a8.00691,8.00691,0,0,0,.96045-.37481c.083-.03827.16309-.08039.24414-.1214a7.97782,7.97782,0,0,0,.7295-.416c.06494-.04175.13183-.07965.19531-.12329a8.01052,8.01052,0,0,0,.81006-.63409c.0581-.05146.11035-.10779.1665-.16095.12012-.11365.24365-.22327.35742-.34491l112-120c.05616-.06037.10449-.12531.15821-.18695.08447-.09577.168-.19147.24755-.2912C246.33594,108.87793,246.41211,108.773,246.48828,108.6676ZM73.53857,112l30.53418,74.63892L34.40967,112Zm108.92286,0h39.1289l-69.66308,74.63892Zm39.9082-16H181.03711L144.21875,48h36.15137ZM75.62988,48h36.15137L74.96289,96H33.63037Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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

const SketchLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SketchLogo.displayName = "SketchLogo";

export default SketchLogo;
