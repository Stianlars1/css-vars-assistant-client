"use client";
import { GradientBackground } from "react-gradient-animation";
import { useDarkMode } from "@/hooks/useDarkmode";
import { useEffect, useState } from "react";

export const HeroSectionTextGradientAnimation = ({
  className,
}: {
  className: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const isDarkmode = useDarkMode();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  const commonProps = {
    count: isDarkmode ? 10 : 12,
    size: {
      min: isDarkmode ? 1000 : 1000,
      max: isDarkmode ? 1350 : 1200,
      pulse: 0,
    },
    speed: {
      x: {
        min: isDarkmode ? 0.2 : 0.6,
        max: isDarkmode ? 0.9 : 3,
      },
      y: {
        min: isDarkmode ? 0.2 : 0.6,
        max: isDarkmode ? 0.9 : 3,
      },
    },
    blending: "overlay",
    opacity: { center: 0.45, edge: 0 },
    skew: 0,
    shapes: ["c"],
    translateYcorrection: true,
  };

  return (
    <GradientBackground
      {...(commonProps as any)}
      className={className}
      colors={
        isDarkmode
          ? {
              background: "#000000",
              particles: [
                "#fa1173",
                "#fd7831",
                "#ffd00b",
                "#3ccc62",
                "#298fff",
                "#571dee",
                "#fa1173",
              ],
            }
          : {
              background: "#fa1173",
              particles: [
                "#fa1173",
                "#fd7831",
                "#ffd00b",
                "#3ccc62",
                "#298fff",
                "#571dee",
                "#fa1173",
              ],
            }
      }
    />
  );
};
