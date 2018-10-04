import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },
  header: {
    marginVertical: metrics.baseMargin,
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: '400'
  },
  perfil: {
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: metrics.baseMargin - 5,
  },

  subTitle: {
    fontSize: 12,
    fontWeight: '200'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blackLegth,
  },
  barraProgresso: {
    marginVertical: metrics.baseMargin,
    flexDirection: 'row',
  },
  barraProgresso01: {
    backgroundColor: colors.green,
    borderWidth: 10,
    width: '20%'
  },
  barraProgresso02: {
    height: 10,
    width: '20%',
    backgroundColor: colors.green,

  },
  barraProgresso03: {
    height: 10,
    width: '20%',
    backgroundColor: colors.primary,
  },
  barraProgresso04: {
    height: 10,
    width: '20%',
    backgroundColor: colors.green,
  },
  barraProgresso05: {
    height: 10,
    width: '20%',
    backgroundColor: colors.yello,
  },
})

export default styles;
