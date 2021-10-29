
import '../style/categorias.css'
import Terror1 from '../assets/categorias/Terror.png'
import Ciencia from '../assets/categorias/teslaNk.jfif'
import fantasia from '../assets/categorias/fantasia.png'
import CiencieF from '../assets/categorias/ciencieF.png'
import Novelas from '../assets/categorias/novelas.png'
import Infantil from '../assets/categorias/infantil.png'
import { Link } from 'react-router-dom'




export const Category = () =>{
    return(
        
        <div className="contenedor">
            <Link to="/scary">

                <figure>
                    <img src={Terror1} />
                    <div className="capa">
                        <h3>Terror</h3>
                        <p>El horror o terror es un género literario que se define por la sensación que causa: miedo.
                        </p>
                    </div>
                </figure>
            </Link>
             <a href="/">
                <figure>
                    <img src={Ciencia} />
                    <div className="capa">
                    <h3>Ciencia y demas</h3>
                        <p>Comenzaron con cartas personales entre los científicos, libros y publicaciones periódicas
                            (como anuarios o revistas científicas)</p>
                    </div>
                </figure>
            </a>
            <a href="/">
                <figure>
                    <img src={fantasia} />
                    <div className="capa">
                    <h3>Fantasia</h3>
                        <p>El término literatura fantástica alude a un género narrativo basado sobre todo en los
                            elementos de fantasía, como la magia o la intervención de criaturas inexistentes.</p>
                    </div>
                </figure>
            </a>
            <a href="/">
                <figure>
                    <img src={CiencieF} alt="" />
                    <div className="capa">
                    <h3>Ciencia Ficcion</h3>
                        <p>Ciencia ficción es la denominación de uno de los géneros derivados de la literatura de
                            ficción, junto con la literatura fantástica y la narrativa de terror.</p>
                    </div>
                </figure>
            </a>
            <a href="/">
                <figure>
                    <img src={Infantil}/>
                    <div className="capa">
                        <h3>Infantil</h3>
                        <p>Es el conjunto de textos literarios que la sociedad ha considerado aptos para los más
                            pequeños porque estos la pueden entender y disfrutar.</p>
                    </div>
                </figure>
            </a>
            <a href="/">
                <figure>
                    <img src={Novelas}/>
                    <div className="capa">
                        <h3>Novelas</h3>
                        <p>Son obras literaria en la que se narra una acción fingida en todo o en parte y cuyo fin es
                            causar placer estético a los lectores. </p>
                    </div>
                </figure>
            </a>
            



            
        </div>
    )
}