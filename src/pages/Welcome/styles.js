import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
  input: {
    height: 50,
    width: 200,
    backgroundColor: colors.white,
    marginVertical: metrics.basePadding,
  },
  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.green,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
})

export default styles;
