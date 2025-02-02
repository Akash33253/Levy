import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
      <LevyState>
        <Main />
      </LevyState>
    </>
  );
}


