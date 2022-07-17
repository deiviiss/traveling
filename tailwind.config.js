/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*{html,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        sanFranciscoDesktop: "url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        yosemite: "url('https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        la: "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        seattle: "url('https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        new_york: "url('https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        norway: "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        sydney: "url('https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        miami: "url('https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        switzerland: "url('https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        bali: "url('https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        norway: "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        chicago: "url('https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        europe: "url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        iceland: "url('https://images.pexels.com/photos/953182/pexels-photo-953182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#000098',
        'secondary': '#004298',
        'tertiary': '#019aa2',
      }),
      textColor: {
        'primary': '#000098',
        'secondary': '#004298',
        'tertiary': '#019aa2',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      ringColor: {
        'primary': '#000098',
        'secondary': '#004298',
        'tertiary': '#019aa2',
      },
    },
  },
  plugins: [

  ],
}