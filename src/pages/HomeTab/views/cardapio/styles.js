import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteDarker,
  },
  thumbnail: {
    width: '100%',
    height: 142,
  },
  thumbnailContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.darkTransparent,  //black transparent
  },
  thumbnailCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  iconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  thumbnailCategory: {
    fontSize: 18,
    color: colors.whiteTransparent,
    marginTop: metrics.basePadding / 2,
  },
  conteudoContainer: {
    paddingHorizontal: metrics.basePadding / 2,
    paddingVertical: metrics.basePadding / 2,
    backgroundColor: colors.white,
  },
  conteudoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.lighter,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.blacker,
  },
  fone: {
    fontSize: 12,
    color: colors.regular,
  },
  buttonConteudoContainer: {
    flexDirection: 'row'
  },
  buttonConteudo: {
    marginLeft: 20,
  },
  recado: {
    justifyContent: 'flex-start',
    paddingVertical: metrics.basePadding / 2,
  },
  textRecado: {
    fontSize: 12,
    color: colors.regular,

  },
//   MENU HORIZONTAL
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 2,
    backgroundColor: colors.whiteDark,

  },
  menuBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

//  CONTAINER INFERIOR COM OS PRATOS, FOTOS, DETALHES E MAPA
  containerInferior: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonCompras: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.green,
    borderRadius: 5,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
  },
  titleCompras: {
    fontSize: 18,
    color: colors.white,
  },
  color: {
    color: colors.blue,
  }
})

export default styles;
