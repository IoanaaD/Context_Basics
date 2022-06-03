
import './App.css';
import Main from './LearnCtxRed/Main'
import DefaultContextProvider from './Comp/store/myContext';
import MyContextProvider from './LearnCtxRed/store/myContext';

function App() {
  return (
    <>
      <MyContextProvider>
        <Main />
      </MyContextProvider>
    </>
  );
}

export default App;
