
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './ScreenHome';
import Quizz from './ScreenQuizz';
import MyPalette from './ScreenMyPalette';
import ShoppingList from './ScreenShoppingList';
import Login from './ScreenLogin';
import Wishlist from './ScreenWishlist'
import AllPalettes from './ScreenAllPalettes'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quizz" component={Quizz}  />
      <Route path="/mypalette" component={MyPalette}  />
      <Route path="/shoppinglist" component={ShoppingList}  />
      <Route path="/login" component={Login}  />
      <Route path="/wishlist" component={Wishlist}  />
      <Route path="/allpalettes" component={AllPalettes}  />
    </Switch>
  </Router>
  );
}

export default App;
