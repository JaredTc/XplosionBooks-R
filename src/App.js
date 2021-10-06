import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import {Header} from '../src/layouts/Header'
import {Footer} from  '../src/layouts/footer'
import {HomePage} from '../src/layouts/Homepague'

function App() {
  return (
    <div >
      < Header/>

      <HomePage />
   
     < Footer />
    </div>
  );
}

export default App;
