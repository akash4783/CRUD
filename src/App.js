import Tables from "./component/Table";
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Edit from "./component/Edit";
import Employee from "./component/Details";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Tables}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="employee" component={Employee}/>
        </Switch>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

