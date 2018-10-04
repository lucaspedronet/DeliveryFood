import { Dimensions } from 'react-native';

//estamos pegando a largura e altura da tela.
const { height, width } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,//verificar se esta no modo paisagem
  screenheight: width < height ? width : height,//verifica se esta no modo retrato
};
