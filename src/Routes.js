import { createStackNavigator } from 'react-navigation'
import MainScreen from './pages/MainScreen'
import CardapioScreen from './pages/HomeTab/views/cardapio/index'
import CestaScreen from './pages/Cesta'
import WelcomeScreen from './pages/Welcome'

const Routes = createStackNavigator({
  Main: { screen: MainScreen,
    navigationOptions: {
      header: null,//removendo a header da Main.
    },
  },
  Cardapio: { screen: CardapioScreen,
    navigationOptions: {
      header: null,//removendo a header da Cardápio.
    },
  },
  Cesta: { screen: CestaScreen },
  Welcome: { screen: WelcomeScreen },
},
{
  initialRouteName: 'Main',
}
)

export default Routes;
