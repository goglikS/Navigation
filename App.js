import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './tabs/tabs';

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
