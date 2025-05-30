// gradients.ts
export const GRADIENTS = {
  // Single Colors - Organized by warmth/mood
  colors: {
    cool: {
      purple: "#6E28F5",
      purpleBlue: "#7459E5",
      blue: "#3B98FD",
      blueGreen: "#28B7AE",
      greenBlue: "#2DC77F",
    },
    warm: {
      redOrange: "#F96633",
      orange: "#F8772B",
      yellowOrange: "#F1A723",
      yellow: "#E9D123",
    },
    vibrant: {
      pink: "#FE1F77",
      mediumPink: "#E42C95",
      pinkPurple: "#CD2FA3",
    },
    nature: {
      green: "#4BCD62",
      yellowGreen: "#93CA42",
    },
  },

  // Gradients - Organized by mood and complexity
  gradients: {
    // Clean, professional dual-color gradients
    classic: {
      purpleToPink: "linear-gradient(135deg, #6E28F5 0%, #E42C95 100%)",
      oceanBreeze: "linear-gradient(45deg, #3B98FD 0%, #28B7AE 100%)",
      natureFresh: "linear-gradient(135deg, #2DC77F 0%, #93CA42 100%)",
      cyberPunk: "linear-gradient(45deg, #FE1F77 0%, #3B98FD 100%)",
    },

    // Warm, cozy feeling gradients
    warm: {
      pinkFire: "linear-gradient(90deg, #FE1F77 0%, #F96633 100%)",
      sunsetGlow: "linear-gradient(90deg, #E9D123 0%, #F8772B 100%)",
      warmSunset:
        "linear-gradient(135deg, #F1A723 0%, #F8772B 50%, #F96633 100%)",
      goldenHour:
        "linear-gradient(45deg, #93CA42 0%, #E9D123 50%, #F1A723 100%)",
      springBloom: "linear-gradient(135deg, #4BCD62 0%, #E9D123 100%)",
      jungleFever:
        "linear-gradient(45deg, #4BCD62 0%, #93CA42 50%, #F8772B 100%)",
      magmaFlow:
        "linear-gradient(135deg, #4BCD62 0%, #E9D123 33%, #F96633 100%)",
    },

    // Cool, tech feeling gradients
    cool: {
      cosmicPurple:
        "linear-gradient(45deg, #6E28F5 0%, #7459E5 50%, #3B98FD 100%)",
      coolOcean:
        "linear-gradient(45deg, #7459E5 0%, #3B98FD 50%, #28B7AE 100%)",
      neonNights: "linear-gradient(90deg, #E42C95 0%, #7459E5 100%)",
      tropicalVibes:
        "linear-gradient(135deg, #28B7AE 0%, #4BCD62 50%, #93CA42 100%)",
      auroraBorealis:
        "linear-gradient(90deg, #28B7AE 0%, #2DC77F 25%, #93CA42 50%, #E9D123 100%)",
    },

    // High energy, electric gradients
    electric: {
      electricPink:
        "linear-gradient(90deg, #6E28F5 0%, #CD2FA3 50%, #FE1F77 100%)",
      electricLime: "linear-gradient(135deg, #93CA42 0%, #E42C95 100%)",
      electricForest:
        "linear-gradient(135deg, #FE1F77 0%, #CD2FA3 25%, #7459E5 50%, #3B98FD 100%)",
    },

    // Bold, contrasting gradients
    bold: {
      purpleFlame: "linear-gradient(135deg, #6E28F5 0%, #F8772B 100%)",
      naturePunk: "linear-gradient(90deg, #4BCD62 0%, #FE1F77 100%)",
      solarEclipse: "linear-gradient(45deg, #E9D123 0%, #6E28F5 100%)",
      digitalSunset: "linear-gradient(135deg, #3B98FD 0%, #F1A723 100%)",
      emeraldRush: "linear-gradient(90deg, #CD2FA3 0%, #2DC77F 100%)",
      coralReef: "linear-gradient(45deg, #F96633 0%, #28B7AE 100%)",
      amberStorm: "linear-gradient(90deg, #7459E5 0%, #F1A723 100%)",
    },

    // Complex, multi-color spectrums
    spectrum: {
      rainbowBright:
        "linear-gradient(90deg, #6E28F5 0%, #E42C95 25%, #3B98FD 50%, #2DC77F 75%, #E9D123 100%)",
      vibrantSpectrum:
        "linear-gradient(113deg, #CD2FA3 0%, #7459E5 25%, #3B98FD 50%, #2DC77F 75%, #93CA42 100%)",
      fireToIce:
        "linear-gradient(90deg, #F96633 0%, #E42C95 33%, #7459E5 66%, #28B7AE 100%)",
      dawnBurst:
        "linear-gradient(45deg, #F1A723 0%, #F8772B 25%, #E42C95 50%, #6E28F5 100%)",
      goldenDepths:
        "linear-gradient(90deg, #E9D123 0%, #28B7AE 33%, #3B98FD 66%, #6E28F5 100%)",
      prismBreak:
        "linear-gradient(45deg, #F8772B 0%, #E42C95 20%, #6E28F5 40%, #3B98FD 60%, #2DC77F 80%, #93CA42 100%)",
      jetbrainsMarketplace:
        "linear-gradient(45deg, #ff8b1a 0%, #fb0040 50%,#e703f6 100%)",
    },
  },
} as const;

// Helper function to get a gradient value from the nested structure
export function getGradientValue(variant: GradientVariant): string {
  const parts = variant.split(".");

  if (parts.length === 3) {
    const [type, category, name] = parts;

    if (type === "colors") {
      const colorValue = (GRADIENTS.colors as any)[category]?.[name];
      return colorValue || "";
    }

    if (type === "gradients") {
      const gradientValue = (GRADIENTS.gradients as any)[category]?.[name];
      return gradientValue || "";
    }
  }

  return "";
}

// Generate all possible variant strings for type safety
type ColorCategories = keyof typeof GRADIENTS.colors;
type ColorVariants = {
  [K in ColorCategories]: {
    [P in keyof (typeof GRADIENTS.colors)[K]]: `colors.${K}.${string & P}`;
  }[keyof (typeof GRADIENTS.colors)[K]];
}[ColorCategories];

type GradientCategories = keyof typeof GRADIENTS.gradients;
type GradientVariants = {
  [K in GradientCategories]: {
    [P in keyof (typeof GRADIENTS.gradients)[K]]: `gradients.${K}.${string & P}`;
  }[keyof (typeof GRADIENTS.gradients)[K]];
}[GradientCategories];

export type GradientVariant = ColorVariants | GradientVariants;
