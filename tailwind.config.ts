import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        black: '#090909',
      },
      fontFamily: {
        raleway: ['Raleway'],
      },
      textColor: {
        disabled: 'rgba(255,255,255,0.3)',
        error: '#ff4f4d',
      },
    },
  },
  plugins: [],
}
export default config
