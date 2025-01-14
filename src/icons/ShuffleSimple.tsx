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
            points="168 48 208 48 208 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="208 168 208 208 168 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="48"
            y1="48"
            x2="208"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="156.28419"
            y1="99.71581"
            x2="208"
            y2="48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="48"
            y1="208"
            x2="99.7158"
            y2="156.2842"
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
            points="168 48 208 48 208 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 168 208 208 168 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="48"
            x2="208"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="150.62718"
            y1="105.37282"
            x2="208"
            y2="48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="208"
            x2="105.37282"
            y2="150.62718"
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
          <g>
            <path d="M214.42358,212.75391c.07618-.10254.15577-.20264.22681-.3086.08252-.123.15405-.25049.22876-.37646.05811-.09815.11987-.19385.17383-.29444.06811-.12695.12573-.25732.18652-.38671.05029-.10743.10425-.2129.1499-.32325.052-.125.094-.25293.13916-.38037.04273-.11914.08863-.23681.12549-.35888.03882-.12793.06763-.25782.09961-.38721.031-.124.06592-.2461.09082-.37207.03-.15088.04834-.30371.06958-.45606.0149-.106.0354-.21045.0459-.31787.02637-.26513.04028-.53125.04-.79687V168a8,8,0,0,0-16,0v20.686L53.65723,42.34326A8.00018,8.00018,0,1,0,42.34277,53.65674L188.686,200H168a8,8,0,0,0,0,16h40c.26367,0,.5271-.01416.78955-.04.11694-.01123.23023-.0332.34546-.0498.14331-.02051.28687-.03711.429-.06543.13086-.02588.25782-.062.38624-.09424.125-.03125.25024-.0586.37377-.09619.12549-.03809.24634-.085.3689-.12891.12378-.04394.24829-.085.37012-.13525.11426-.04737.22388-.10352.33545-.15576.125-.05909.25122-.11475.374-.18018.105-.05664.20508-.12061.30713-.18164.12231-.07276.24561-.14209.36475-.22168.10986-.07324.21289-.15576.31884-.23438.10328-.07666.209-.14892.30933-.231.17358-.14258.33862-.29541.49951-.45166.02759-.02686.05786-.04981.08521-.07715.03051-.03028.05615-.064.08593-.09522.15284-.15771.30225-.31836.44165-.48828C214.27,212.96973,214.34448,212.86035,214.42358,212.75391Z" />
            <path d="M150.627,113.37305a7.97784,7.97784,0,0,0,5.65723-2.34326L200,67.314V88a8,8,0,0,0,16,0V48.00488c.00024-.26562-.01367-.53174-.04-.79687-.0105-.10742-.031-.21192-.0459-.31787-.02124-.15235-.03955-.30518-.06958-.45606-.0249-.126-.05981-.248-.09082-.37207-.032-.12939-.06079-.25928-.09961-.38721-.03686-.12207-.083-.23974-.12549-.35937-.04516-.127-.0874-.25488-.13916-.37988-.04565-.11035-.09985-.21582-.15014-.32373-.06055-.1294-.11817-.25928-.186-.38623-.05444-.10108-.1167-.19776-.17529-.29639-.07422-.12549-.14551-.252-.2273-.374-.07153-.10694-.15161-.20752-.22827-.31055-.07885-.106-.15283-.21484-.23755-.31787-.1394-.16992-.28881-.33057-.44165-.48828-.02978-.03125-.05542-.06494-.08593-.09522-.0293-.0293-.06153-.05371-.09131-.08252-.15869-.15429-.32105-.30469-.49219-.44531-.106-.08691-.21777-.16357-.32715-.24463-.1001-.07373-.19678-.15137-.30029-.2207-.12476-.0835-.25415-.15625-.38233-.23194-.09619-.05712-.18994-.11767-.28881-.17089-.12769-.06836-.25879-.12647-.38941-.1875-.10669-.04981-.21118-.10352-.32031-.14893-.126-.05225-.25439-.09424-.38208-.13965-.1189-.04248-.23608-.08838-.35742-.125-.12622-.03857-.2544-.0664-.38208-.09814-.126-.03174-.25049-.06739-.37866-.09278-.14356-.02832-.28858-.04541-.43311-.06591-.114-.01612-.22632-.03809-.3418-.04932-.26245-.02588-.52563-.04-.78882-.04H168a8,8,0,0,0,0,16h20.68579L144.96973,99.71582a8.00025,8.00025,0,0,0,5.65722,13.65723Z" />
            <path d="M99.71582,144.97021l-57.373,57.373a8.00018,8.00018,0,0,0,11.31446,11.31348l57.373-57.37256a8.00035,8.00035,0,0,0-11.31445-11.314Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="168 48 208 48 208 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208 168 208 208 168 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="48"
            y1="48"
            x2="208"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="150.62718"
            y1="105.37282"
            x2="208"
            y2="48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="48"
            y1="208"
            x2="105.37282"
            y2="150.62718"
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
            points="168 48 208 48 208 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208 168 208 208 168 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="48"
            y1="48"
            x2="208"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="150.62718"
            y1="105.37282"
            x2="208"
            y2="48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="48"
            y1="208"
            x2="105.37282"
            y2="150.62718"
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
            points="168 48 208 48 208 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 168 208 208 168 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="48"
            x2="208"
            y2="208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="150.62718"
            y1="105.37282"
            x2="208"
            y2="48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="208"
            x2="105.37282"
            y2="150.62718"
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

const ShuffleSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ShuffleSimple.displayName = "ShuffleSimple";

export default ShuffleSimple;
