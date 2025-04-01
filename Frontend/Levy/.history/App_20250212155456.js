import { StatusBar } from 'react-native';
import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-400': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-500': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-600': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-700': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Roboto-400': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'WorkSans-400': require('./assets/fonts/Work_Sans/WorkSans-Regular.ttf'),
    'WorkSans-500': require('./assets/fonts/Work_Sans/WorkSans-Medium.ttf'),
    'WorkSans-600': require('./assets/fonts/Work_Sans/WorkSans-SemiBold.ttf'),
    'WorkSans-700': require('./assets/fonts/Work_Sans/WorkSans-Bold.ttf'),
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


