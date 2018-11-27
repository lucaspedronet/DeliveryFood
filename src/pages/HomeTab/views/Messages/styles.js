import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  patepapo: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighter,
    height: 60,
  },
  input: {
    height: 40,
    width: 280,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    padding: 10,
    marginHorizontal: 10,
  },
})

export default styles;
