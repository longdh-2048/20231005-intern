import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#003b94',
        secondary: '#003b94'
      },
      fontFamily: {
        sans: ['Avenir Next', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
