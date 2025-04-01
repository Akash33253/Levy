import { StatusBar } from 'react-native';
import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter_Regular.ttf'),
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


