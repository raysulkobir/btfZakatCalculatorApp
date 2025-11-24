/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { store } from './src/store';
import { Provider } from 'react-redux';
import AppNavigation from './src/app/navigation';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  return (
    <Provider store={store}>
      {/* <Text>this is a good</Text> */}
      <AppNavigation colorScheme="light" />
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
