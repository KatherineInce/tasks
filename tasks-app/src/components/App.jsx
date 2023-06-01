import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store'; // Import the store and persistor
import {BrowserRouter,Route,Routes} from 'react-router-dom'

//components
import MainPage from './mainPage'
import List from './list'
import Tasks from './tasks'

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
          </Routes>
        </BrowserRouter>
    </PersistGate>
  </Provider>
  );
}

export default App;
