import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './components/Demo';
import Dragon from './components/Dragon';
import Main from './components/Main';
import Scoring from './components/Scoring';
import store from './redux/store';
import Tiles from './components/Tiles';

function App() {
  return (   
    <Provider store={store}>
      <BrowserRouter>
        <Link to='/'>
          <p className='title'>Carcassonne</p>
        </Link>
        <Demo/>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/tiles' element={<Tiles/>}></Route>
            <Route path='/dragon' element={<Dragon />}></Route>
            <Route path='/scoring' element={<Scoring/>}></Route>
            {/* <Route path='*' element={<PageNotFound />}></Route> */}
          </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
