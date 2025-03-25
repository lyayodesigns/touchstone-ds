export const colors = {
  primary: {
    main: '#6ea8fe', // Blue gradient start
    light: '#9fcdfd', // Lighter shade of blue
    dark: '#447df5', // Blue gradient end
    transparent: 'rgba(110, 168, 254, 0.1)',
  },
  secondary: {
    main: '#447df5', // Blue gradient end
    light: '#6ea8fe',
    dark: '#265bd6',
    transparent: 'rgba(68, 125, 245, 0.1)',
  },
  accent: {
    main: '#6ea8fe', // Blue gradient start
    light: '#9fcdfd',
    dark: '#447df5',
    transparent: 'rgba(110, 168, 254, 0.1)',
  },
  background: {
    main: '#ffffff', // White background
    light: '#f9f9f9', // Slightly off-white
    dark: '#f1f1f1',
    transparent: 'rgba(255, 255, 255, 0.9)',
  },
  text: {
    primary: '#000000', // Black text for high contrast
    secondary: '#3b3b3b', // Dark gray for secondary text
    accent: '#447df5', // Accent blue
    muted: 'rgba(0, 0, 0, 0.6)', // Muted black
  },
  gradients: {
    primary: 'linear-gradient(to right, #6ea8fe, #447df5)', // Updated blue gradient
    accent: 'linear-gradient(to right, #447df5, #6ea8fe)', // Reverse blue gradient
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), #ffffff)', // Subtle white gradient
    luxury: 'linear-gradient(45deg, #6ea8fe, #447df5)', // Diagonal blue gradient
  },
} as const;

// CSS Custom Properties for Tailwind
export const cssVariables = {
  '--background': '0 0% 100%', // White
  '--foreground': '0 0% 0%', // Black
  '--card': '0 0% 98%', // Slightly off-white
  '--card-foreground': '0 0% 0%', // Black
  '--popover': '0 0% 100%', // White
  '--popover-foreground': '0 0% 0%', // Black
  '--primary': '220 75% 60%', // Blue gradient
  '--primary-foreground': '0 0% 100%', // White
  '--secondary': '220 60% 70%', // Light blue
  '--secondary-foreground': '0 0% 100%', // White
  '--muted': '0 0% 96%', // Very light gray
  '--muted-foreground': '0 0% 30%', // Dark gray
  '--accent': '220 75% 70%', // Blue
  '--accent-foreground': '0 0% 100%', // White
  '--destructive': '0 84.2% 60.2%', // Red
  '--destructive-foreground': '0 0% 100%', // White
  '--border': '0 0% 90%', // Light gray border
  '--input': '0 0% 98%', // Very light gray input
  '--ring': '220 75% 60%', // Blue focus ring
} as const;

// Utility function to get CSS variable
export const getCssVar = (variable: keyof typeof cssVariables) => `hsl(${cssVariables[variable]})`;
