/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'], 
    },
    colors: {
      'vampire-black': '#070408',
      'raisin-black': '#231425',
      'eerie-black': '#252414',
      'dark-charcoal': '#322B33',
      'dark-purple': '#351d31',
      'purple-taupe': '#543c52',
      'black-olive': '#3F3640',
      'old-lavender': '#716073',
      'maximum-purple': '#6D3E73',
      'rich-lilac': '#B567BF',
      'midnight': '#6B3273',
      'dark-jungle-green': '#261117',
      'amazon': '#387363',
      'green-sap': '#4D7327',
      'sunset-orange': '#f55951',
      'spartan-crimson': '#9c1e17',
      'prussian-blue': '#03305B',
      'medium-persian-blue': '#0559A8',
      'electric-blue': '#79EAFF',
      'maastricht-blue': '#011933',
      'metallic-blue': '#274F75',
      'queen-blue': '#3872A8',
      'sky-blue': '#64cbe0',
      'azure': '#0887FF',
      'calamansi': '#f6ffa5',
      'queen-pink': '#E8C3DC',
      'pink-lace': '#fce2ff',
      'dust-storm': '#edd2cb',
      'snow': '#fff8f6',
      'alabaster': '#f1e8e6',
      'white': '#ffffff',
    },
    extend: {
      animation: {
        'wave-very-slow': 'wave 2s linear infinite',
        'wave-slow': 'wave 1.5s linear infinite',
        'wave-fast': 'wave 0.5s linear infinite',
      }
    },
  },
  plugins: [],
}
