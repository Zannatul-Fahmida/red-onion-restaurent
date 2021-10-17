import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import MenuDetails from './components/Home/MenuDetails/MenuDetails';

export const MenuContext = createContext();

function App() {
  const [food, setFood] = useState("lunch");
  return (
    <div className="App">
      <MenuContext.Provider value={{food, setFood}}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/details/:idMenu">
          <MenuDetails></MenuDetails>
        </Route>
        <Route path="/cart">
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
