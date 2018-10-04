import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles'

const styles = StyleSheet.create({
  loading: {
    paddingTop: metrics.basePadding,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  containerSearchInput: {
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighter,
  },
  searchIput: {
    backgroundColor: colors.whitedarker,
    borderRadius: metrics.baseRadius,
  },
  nenhumResultado: {
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
  },
  titleNenhum: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.darker,
  },
});

export default styles;
