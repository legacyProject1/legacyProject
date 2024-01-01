import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'border-color ':'#e5e7eb',
      'gray':'#e5e7eb',
      'white':'#ffffff',
      "bluer":'#1e3a8a',
      "bluee":'#93c5fd',
      "jaune":'#92400e',
      "jaunee":'#fffbeb',
      'black':'#000000',
      'blue':'#5995cc',
      'gray-400':'#94a3b8',
      'gray-700':'#334155',
      'orange':'#e83e01',
      'bg':'#faf5f2',
      'green-400':'#a3e635',
      "jaunema":'#f59e0b',
      "bluemalik":"#172554"
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "malek":'url("https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/414464100_218606814659581_8694516334462509398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pAYCUIgRqkYAX8trUW0&_nc_ht=scontent.ftun2-2.fna&oh=00_AfCwplP0mLpNbTdvWx_VXs7OF_7KaK5aErhj5ZFMZioIww&oe=6592F323")'
      },
    },
  },
  plugins: [],
}
export default config
