import { StackNavigator } from 'react-navigation';

import Home from '../pages/Home/index';
import LVExample1 from '../pages/ListView/example1';
import LVExample2 from '../pages/ListView/example2';
import FLExample1 from '../pages/FlatList/example1';
import FLExample2 from '../pages/FlatList/example2';

const Stack = StackNavigator(
  {
    home: { screen: Home },
    listView1: { screen: LVExample1 },
    listView2: { screen: LVExample2 },
    flatList1: { screen: FLExample1 },
    flatList2: { screen: FLExample2 },
  },
  {
    initialRouteName: 'home',
  },
);

export default Stack;
