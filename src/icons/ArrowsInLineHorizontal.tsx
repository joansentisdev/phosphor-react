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
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="12"
            y1="128"
            x2="88"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="56 96 88 128 56 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="244"
            y1="128"
            x2="168"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="200 160 168 128 200 96"
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
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="128"
            x2="96"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 96 96 128 64 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="128"
            x2="160"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 160 160 128 192 96"
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
          <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-33.56152,92.73364c.07031-.0957.14453-.188.21093-.28686.085-.12659.15918-.25782.23584-.38806.05567-.09436.11524-.18616.167-.28309.06933-.12915.12841-.26184.18994-.39379.04931-.10547.10205-.20874.147-.31665.05225-.12647.09522-.25562.14063-.38428.042-.11817.0874-.2345.124-.35523.03906-.1289.06787-.25976.10058-.39013.03077-.12305.06543-.24414.09034-.36939.02978-.15137.04834-.30444.06933-.457.01465-.106.03516-.21.0459-.31714a8.02276,8.02276,0,0,0,0-1.584c-.01074-.10718-.03125-.21118-.0459-.31714-.021-.15259-.03955-.30566-.06933-.457-.02491-.12525-.05957-.24634-.09034-.36939-.03271-.13037-.06152-.26123-.10058-.39013-.03662-.12073-.082-.23706-.124-.35523-.04541-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.132-.12061-.26464-.18994-.39379-.05176-.09693-.11133-.18873-.167-.28309-.07666-.13024-.15087-.26147-.23584-.38806-.0664-.09887-.14062-.19116-.21093-.28686-.084-.11438-.16407-.23084-.25537-.34156-.11622-.14111-.2417-.27368-.36719-.40649-.0542-.05762-.10205-.11914-.15869-.17554l-32-32a8.00053,8.00053,0,0,0-11.31446,11.31446L76.686,120H16a8,8,0,0,0,0,16H76.686L58.34277,154.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l32-32c.05664-.0564.10449-.11792.15869-.17554.12549-.13281.251-.26538.36719-.40649C102.27441,132.96448,102.35449,132.848,102.43848,132.73364ZM240,120H179.314l18.34327-18.34277a8.00053,8.00053,0,0,0-11.31446-11.31446l-32,32c-.05664.0564-.10449.11792-.15869.17554-.12549.13281-.251.26538-.36719.40649-.0913.11072-.17138.22718-.25537.34156-.07031.0957-.14453.188-.21093.28686-.085.12659-.15918.25782-.23584.38806-.05567.09436-.11524.18616-.167.28309-.06933.12915-.12841.26184-.18994.39379-.04931.10547-.10205.20874-.147.31665-.05225.12647-.09522.25562-.14063.38428-.042.11817-.0874.2345-.124.35523-.03906.1289-.06787.25976-.10058.39013-.03077.12305-.06543.24414-.09034.36939-.02978.15137-.04834.30444-.06933.457-.01465.106-.03516.21-.0459.31714a8.02276,8.02276,0,0,0,0,1.584c.01074.10718.03125.21118.0459.31714.021.15259.03955.30566.06933.457.02491.12525.05957.24634.09034.36939.03271.13037.06152.26123.10058.39013.03662.12073.082.23706.124.35523.04541.12866.08838.25781.14063.38428.04492.10791.09766.21118.147.31665.06153.13195.12061.26464.18994.39379.05176.09693.11133.18873.167.28309.07666.13024.15087.26147.23584.38806.0664.09887.14062.19116.21093.28686.084.11438.16407.23084.25537.34156.11622.14111.2417.27368.36719.40649.0542.05762.10205.11914.15869.17554l32,32a8.00053,8.00053,0,0,0,11.31446-11.31446L179.314,136H240a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="16"
            y1="128"
            x2="96"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="64 96 96 128 64 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="240"
            y1="128"
            x2="160"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="192 160 160 128 192 96"
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
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="16"
            y1="128"
            x2="96"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="64 96 96 128 64 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="240"
            y1="128"
            x2="160"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="192 160 160 128 192 96"
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
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="128"
            x2="96"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 96 96 128 64 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="128"
            x2="160"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 160 160 128 192 96"
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

const ArrowsInLineHorizontal = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ArrowsInLineHorizontal.displayName = "ArrowsInLineHorizontal";

export default ArrowsInLineHorizontal;
