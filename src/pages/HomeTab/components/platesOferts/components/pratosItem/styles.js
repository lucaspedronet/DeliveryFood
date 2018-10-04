import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    width: 100,

  },
  image: {
    height: 80,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detalhe: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: metrics.baseMargin / 2,
    marginVertical: metrics.baseMargin / 2,

  },
  value: {
    fontSize: 12,
    color: colors.green,
  },
  title: {
    fontSize: 12,
  },
});

export default styles;
