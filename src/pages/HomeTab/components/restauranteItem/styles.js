import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: metrics.basePadding / 4,
    backgroundColor: colors.lighting,
    marginTop: metrics.basePadding / 4,
    borderColor: colors.primary,
    borderRadius: metrics.baseRadius * 5,
    // borderTopEndRadius: metrics.baseRadius * 10,
    marginHorizontal: metrics.basePadding / 2,
    borderBottomColor: colors.lighter,
    borderBottomWidth: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: metrics.baseMargin / 4,
  },
  avatar: {
    height: metrics.basePadding * 2,
    width: metrics.basePadding * 2,
    borderRadius: metrics.basePadding,
    margin: metrics.baseMargin / 2,
  },
  cardItem: {
    marginLeft: metrics.baseMargin / 2,
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 12,
    color: colors.blacker,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius * 3,
    backgroundColor: colors.yello,
    height: 20,
    width: 50,
  },
  titleButton: {
    color: colors.black,
    fontSize: 14,
  },
  infoBox: {
    justifyContent: 'space-between',
    // paddingHorizontal: metrics.basePadding / 2,
    paddingVertical: metrics.basePadding / 4,
  },
  info: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 10,
  },
  icon: {
    margin: 5,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginRight: 10,
  },

});

export default styles;
