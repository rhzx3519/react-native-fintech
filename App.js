import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/HomeScreen';
import SignUpScreen from './app/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen 
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

