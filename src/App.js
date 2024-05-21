import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer'
import HooksCakeContainer from './Components/HooksCakeContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
