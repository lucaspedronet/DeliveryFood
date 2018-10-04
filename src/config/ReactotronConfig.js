import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagPlugin from 'reactotron-redux-saga';

if (__DEV__) {

  const tron = Reactotron
    .configure({ host: '10.0.3.2' }) // controla as configurações de conexão e comunicação
    .useReactNative() // adicione todos os plug-ins nativos de resposta integrados
    .use(reactotronRedux())
    .use(sagPlugin())
    .connect() // vamos nos conectar!

  tron.clear();
  console.tron = tron;
}
