import React from 'react';
import Navigation from './src/router/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {SafeAreaView} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
