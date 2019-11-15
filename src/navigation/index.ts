import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from 'src/screens/Home';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Navigator);
