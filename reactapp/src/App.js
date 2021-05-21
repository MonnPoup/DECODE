
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';


import token from './reducers/token'
import palette from './reducers/palette'

import Home from './ScreenHome';
import Quiz from './ScreenQuizz';
import MyPalette from './ScreenMyPalette';
import MyPalette2 from './Screen2';
import ShoppingList from './ScreenShoppingList';
import Login from './ScreenLogin';
import Wishlist from './ScreenWishlist'
import AllPalettes from './ScreenAllPalettes'
import navbar from './navbar'

const store = createStore(combineReducers({token, palette}))

function App() {

  return (
    <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={Quiz}  />
      <Route exact path="/mypalette" component={MyPalette}  />
      <Route exact path="/mypalette2" component={MyPalette2}  />
      <Route path="/shoppinglist" component={ShoppingList}  />
      <Route path="/login" component={Login}  />
      <Route path="/wishlist" component={Wishlist}  />
      <Route path="/allpalettes" component={AllPalettes}  />
      <Route path="/navbar" component={navbar}  />
    </Switch>
  </Router>
  </Provider>
  );
}

export default App;
