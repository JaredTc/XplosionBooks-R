import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
// import {Header} from '../src/layouts/Header'
import {Footer} from  '../src/layouts/footer'
 import {HomePage} from '../src/layouts/Homepague'
import {DestadoPage} from './layouts/destacado2'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Category } from './layouts/categorias';
import {Navbar} from '../src/layouts/navbar'
function App() {
  return (
    <div >
      <Navbar />
    {/* <Router>
      <Header>
        <Switch>
          <Route exact path="/category">
            <Category />
          </ Route>
        </Switch>
      </Header>
    </Router> */}

     

      <HomePage />
      < DestadoPage />
   
     < Footer /> 
    
    </div>
  );
}

export default App;
