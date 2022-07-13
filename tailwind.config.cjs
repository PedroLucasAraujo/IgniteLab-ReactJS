/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",

    /* Todos os arquivos que estiverem dentro da pasta 'src', 
       que está na raiz do meu projeto, dentro de qualquer pasta, arquivos que 
       terminarem com tsx, terão estilização do tailwind */
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
