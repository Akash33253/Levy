import Main from './Main';
import "./global.css"
import LevyState from './src/context/LevyState';

export default function App() {
  return (
    <>
      <LevyState>
        <Main />
      </LevyState>
    </>
  );
}


