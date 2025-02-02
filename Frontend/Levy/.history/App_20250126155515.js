import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <LevyState>
        <PaperProvider>
          <Main />
        
      </LevyState>
    </>
  );
}


