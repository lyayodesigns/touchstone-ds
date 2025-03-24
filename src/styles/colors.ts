export const colors = {
  primary: {
    main: '#022255', // Deeper Midnight Sky
    light: '#033177', // Original Midnight Sky
    dark: '#011133', // Darkest Midnight Sky
    transparent: 'rgba(2, 34, 85, 0.1)',
  },
  secondary: {
    main: '#0645a5', // Brighter Navy Blue
    light: '#0356c7',
    dark: '#033877',
    transparent: 'rgba(6, 69, 165, 0.1)',
  },
  accent: {
    main: '#033177', // Midnight Sky as Accent
    light: '#0645a5',
    dark: '#022255',
    transparent: 'rgba(3, 49, 119, 0.1)',
  },
  background: {
    main: '#011133', // Deepest Midnight Sky
    light: '#022255',
    dark: '#000A22',
    transparent: 'rgba(1, 17, 51, 0.9)',
  },
  text: {
    primary: '#F8F1E5', // Soft Ivory (unchanged)
    secondary: '#D4AF37', // Champagne Gold (unchanged)
    accent: '#FFFFFF',
    muted: 'rgba(248, 241, 229, 0.7)',
  },
  gradients: {
    primary: 'linear-gradient(to right, #011133, #022255)', // Deep Midnight Sky gradient
    accent: 'linear-gradient(to right, #022255, #0645a5)', // Midnight Sky variations
    background: 'linear-gradient(to bottom, rgba(1, 17, 51, 0.9), #011133)', // Deep Midnight Sky gradient
    luxury: 'linear-gradient(45deg, #022255, #0645a5)', // Midnight Sky blue variations
  },
} as const;

// CSS Custom Properties for Tailwind
export const cssVariables = {
  '--background': '220 94% 10%', // Deepest Midnight Sky
  '--foreground': '43 67% 94%', // Soft Ivory
  '--card': '220 94% 12%',
  '--card-foreground': '43 67% 94%',
  '--popover': '220 94% 8%',
  '--popover-foreground': '43 67% 94%',
  '--primary': '220 95% 15%', // Even Deeper Midnight Sky
  '--primary-foreground': '0 0% 100%',
  '--secondary': '220 93% 35%', // Navy Blue
  '--secondary-foreground': '0 0% 100%',
  '--muted': '220 94% 12%',
  '--muted-foreground': '43 67% 94%',
  '--accent': '220 95% 23%', // Midnight Sky as Accent
  '--accent-foreground': '0 0% 100%',
  '--destructive': '0 84.2% 60.2%',
  '--destructive-foreground': '0 0% 100%',
  '--border': '220 93% 35%', // Navy Blue for borders
  '--input': '220 94% 12%',
  '--ring': '220 93% 35%', // Navy Blue for focus rings
} as const;

// Utility function to get CSS variable
export const getCssVar = (variable: keyof typeof cssVariables) => `hsl(${cssVariables[variable]})`;

// Example usage:
// import { colors, getCssVar } from '@/styles/colors';
//
// // Direct color usage
// backgroundColor: colors.primary.main
//
// // CSS Variable usage
// backgroundColor: getCssVar('--primary')
//
// // Tailwind usage remains the same
// className="bg-primary text-accent"