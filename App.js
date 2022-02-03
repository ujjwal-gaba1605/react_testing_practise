import './App.css';
import { Switch, Route } from "react-router-dom"
import Banner from "./Component/Banner/Banner";
import Todo from "./Component/Todo/Todo";

function App() {
  return (
      <div className="App">
          <Banner/>
        <Switch>
          <Route strict exact path="/" component={Todo}/>
        </Switch>
      </div>
  );
}

export default App;
