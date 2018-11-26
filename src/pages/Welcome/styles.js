import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.roxo,
  },
  input: {
    height: 50,
    width: 280,
    backgroundColor: colors.white,
    marginVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    borderRadius: 5,
    padding: 15,
  },
  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    width: 280,

  },
  button: {
    backgroundColor: colors.green,
    height: 50,
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  loading: {
    width: 25,
    height: 25,
  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',

  },
  context: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    // textDecorationColor: '#333',
    textDecorationLine: 'none'
  }
})

export default styles;
