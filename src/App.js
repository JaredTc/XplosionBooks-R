import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
// import {Header} from '../src/layouts/Header'
import {Footer} from  '../src/layouts/footer'
import {HomePage} from '../src/layouts/Homepague'
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import { Category } from './layouts/categorias';
import {Navbar} from '../src/layouts/navbar'
import { Terror } from './layouts/Terror';
import {IniciarSesion} from './layouts/iniciar_sesión';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div >
       <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route  exact  path="/category" component={Category}/>
              <Route exact path="/contact"/>
              <Route exact path="/registro"/>
              <Route  exact path="/start"component={IniciarSesion}/>
              <Route exact path="/scary" component={Terror}/>
              
            </Switch> 
           
    
    </div>
    < Footer />
    </BrowserRouter>
  );
}

export default App;
