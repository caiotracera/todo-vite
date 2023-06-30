export const theme = {
  colors: {
    'blue-700': '#1E6F9F',
    'blue-500': '#4EA8DE',
    'purple-700': '#5E60CE',
    'purple-500': '#8284FA',
    'gray-100': '#F2F2F2',
    'gray-200': '#D9D9D9',
    'gray-300': '#808080',
    'gray-400': '#333333',
    'gray-500': '#262626',
    'gray-600': '#1A1A1A',
    'gray-700': '#0D0D0D',
    'red-500': '#E25858',
  },
  font: {
    family: {
      default: 'Inter, sans-serif',
    },
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      /**
       * 16px
       */
      medium: '1rem',
      /**
       * 14px
       */
      small: '0.875rem',
      /**
       * 12px
       */
      tiny: '0.75rem',
    },
  },
} as const;
