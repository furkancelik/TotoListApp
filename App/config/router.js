import { StackNavigator } from 'react-navigation';

import Home from '../pages/Home/index';

const Stack = StackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Stack;
