import Color from 'color';

export default {
  white: '#FFF',
  whiteDark: Color('#FFFFFF').darken(0.01),
  whiteDarker: Color('#FFFFFF').darken(0.05),
  lighting: '#FDFDFD',
  lightingDark: Color('#FDFDFD').darken(0.1),
  lighter: '#EEEEEE',
  lighterDark: Color('#EEEEEE').darken(0.5),
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  blacker: '#222',
  black: '#000',
  blackLegth: '#111111',
  roxo: '#6550B7',
  green: '#6ADC00',
  yello: '#FDDD01',
  blue: '#06F',

  primary: '#FF1F33',
  primaryDark: Color('#6550B7').darken(0.5),//a funfção Color possui algumas propriedades (darken) que nos permite por exemplo escurer alguma cor especifica
  //nesse caso escurecemos em 10 por cento.
  secundary: '#135f5f',
  succes: '#9DCA83',
  danger: '#E37A7A',

  transparent: 'transparent', //Opacidade 0
  darkTransparent: 'rgba(0, 0, 0, 0.6)', //Preto Transparente 0.6 Modal
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',//cor para botões inativos

};
