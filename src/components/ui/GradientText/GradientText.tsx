// GradientText.tsx
import React, { CSSProperties, HTMLAttributes, ReactElement } from "react";
import { getGradientValue, GradientVariant } from "./gradients";
import { cx } from "@/lib/utils/cx";

export interface GradientTextProps {
  variant: GradientVariant;
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  variant,
  children,
  className,
}) => {
  const gradientValue = getGradientValue(variant);

  const isSingleColor = gradientValue.startsWith("#");

  const gradientStyles: CSSProperties = isSingleColor
    ? {
        // For single colors, just set the color directly
        color: gradientValue,
      }
    : {
        background: gradientValue,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      };

  // Clone the child element and merge styles and className
  return React.cloneElement(children, {
    style: {
      ...(children.props.style || {}),
      ...gradientStyles,
    },
    className: cx(className, children.props.className),
  } as Partial<HTMLAttributes<HTMLElement>>);
};
