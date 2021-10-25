import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
// import {Header} from '../src/layouts/Header'
import {Footer} from  '../src/layouts/footer'
 import {HomePage} from '../src/layouts/Homepague'
import {DestadoPage} from './layouts/destacado2'
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import { Category } from './layouts/categorias';
import {Navbar} from '../src/layouts/navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div >
       <Switch>
              <Route exact path="/">
              <HomePage />
              < DestadoPage />
              </Route>
              <Route  exact path="/category">
                <Category />
              </Route>
              <Route exact path="/contact">
                {/* <Contactanos /> */}
              </Route>
              <Route exact path="/registro">
                {/* <Registro /> */}
              </Route>
              <Route  exact path="/start">
                {/* <IniciarSesion /> */}
              </Route>
            </Switch> 
            < Footer />
    
    </div>
    </BrowserRouter>
  );
}

export default App;
