import { StatusBar } from 'react-native';
import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Semibold': require('./assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
  });
  if (!fontsLoaded)
    return null;
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
      <LevyState>
        <Main />
      </LevyState>
    </>
  );
}


