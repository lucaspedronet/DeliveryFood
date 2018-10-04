import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailBackground: {
    width: '100%',
    height: 200,
  },
  containerThumbnail: {
    backgroundColor: colors.darkTransparent,
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
    flex: 1,
  },
  thumbnailAvatarContainer: {
    marginVertical: metrics.baseMargin / 2,
    marginHorizontal: metrics.baseMargin / 2,
  },
  thumbnailAvatar: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  containerUser: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },
  nameUser: {
    fontSize: 12,
    color: colors.light,
    fontWeight: '100',
  },
  containerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: metrics.baseMargin,
    paddingTop: metrics.basePadding,
  },
  items: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleNumber: {
    fontSize: 18,
    fontWeight: '300',
    color: colors.white,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lighter,
  },
  containerRecado: {},
  recado: {},
  textRecado: {},
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    alignItems: 'center',

  },
  containerButton: {
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin * 5,
    marginVertical: metrics.baseMargin / 2,
  },
  buttonMenu: {
    alignItems: 'center',
  },
  iconMenu: {},


});

export default styles;
