import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// import {Header} from '../src/layouts/Header'
import {Footer} from  '../src/layouts/footer'
import {HomePage} from '../src/layouts/Homepague'
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import { Category } from './layouts/categorias';
import {Navbar} from '../src/layouts/navbar'
import { Terror } from './layouts/Terror';
import {IniciarSesion} from './layouts/iniciar_sesión';
import {Registro} from './layouts/registro';
import { Etica } from './components/Etica';
import { Nurse } from './pages/nurse';
import { Premonicion } from './pages/Premon';
import { Ciao } from './pages/ciao';
import { Clodett } from './pages/clodett';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <div >
       <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route  exact  path="/category" component={Category}/>
              <Route exact path="/contact"/>
              <Route exact path="/registro" component={Registro}/>
              <Route  exact path="/start"component={IniciarSesion}/>
              <Route exact path="/scary" component={Terror}/>
              <Route exact path="/etica" component={Etica}/ >  
              <Route exact path="/registro" component={Registro}/>            
              <Route exact path="/nurse" component={Nurse}/>            
              <Route exact path="/premonicion" component={Premonicion}/>            
              <Route exact path="/ciao" component={Ciao}/>            
              <Route exact path="/clodett" component={Clodett}/>            
            </Switch> 
           
    
    </div>
    < Footer />
    </BrowserRouter>
  );
}

export default App;
