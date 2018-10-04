import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles'


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
    marginVertical: metrics.basePadding / 4,
    paddingVertical: metrics.basePadding / 2,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderTopColor: colors.light,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    minHeight: 100,
    maxHeight: 150,
  },
  avatar: {
    width: 50,
    height: 50,
    borderColor: colors.light,
    borderWidth: 1,
  },
  detalheBox: {
    maxWidth: '75%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    marginHorizontal: metrics.baseMargin,
  },
  detalhe: {
    justifyContent: 'space-between'
  },
  iconBox: {

  },
  detalheBoxBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 12,
  },
  preco: {
    fontSize: 16,
    fontWeight: '300',
  },
  unidade: {
    fontSize: 14,
    fontWeight: '300',
  },
  loading: {
    paddingTop: metrics.basePadding,
  },
  loadingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.blacker,
    textAlign: 'center',
    paddingVertical: metrics.basePadding,
  },
});

export default styles;

