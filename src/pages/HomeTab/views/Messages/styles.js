import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
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
})

export default styles;
