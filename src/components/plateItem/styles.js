import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    // height: 150,
    // width: 100,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  image: {
    width: 90,
    height: 70,
    borderTopRightRadius: metrics.baseMargin,
    borderBottomLeftRadius: metrics.baseMargin,
  },
  detalhes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
  },

})

export default styles;
