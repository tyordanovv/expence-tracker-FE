import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './src/navigation/TabNavigator';

import { GlobalProvider } from './src/context/GlobalState';
import { AddTransactionScreen } from './src/screens/AddTransactionScreen';

const RootStack = createStackNavigator();

export const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}
        >
          <RootStack.Screen
            name='main'
            component={TabNavigator}
          ></RootStack.Screen>
          <RootStack.Screen
            name='transaction'
            component={AddTransactionScreen}
            options={{
              presentation: 'modal',
              cardStyle: {
                borderRadius: 40,
              },
            }}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
