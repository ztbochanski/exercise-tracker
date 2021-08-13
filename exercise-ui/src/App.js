import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShoppingListPage from './pages/shopping-list-page/shopping-list-page.component';
import StoreListPage from './pages/store-list-page/store-list-page.component';
import stores from './data/stores';
import items from './data/items';
import React from 'react';

/** exclusively rendering routes with the <Switch> component from react router dom library, 
the docs recommend using it to render only one page

https://reactrouter.com/web/api/Switch
**/

function App() {  

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shopping-list-page">
            <ShoppingListPage items={items}/>
          </Route>
          <Route path="/store-list-page">
            <StoreListPage stores={stores}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
