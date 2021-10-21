
import Libro1 from '../assets/destacado/Libro1.jpg'
import Libro2 from '../assets/destacado/Libro2.jpg'
import Libro3 from '../assets/destacado/Libro3.jpg'
import Libro4 from '../assets/destacado/Libro4.jpg'
import Libro6 from '../assets/destacado/Libro6.jpg'
export const Destacado = () =>{
    return(
        <div className="destacado">
           
            <li><a href="#"><img  src={Libro1}  alt="" /></a></li>
            <li><a href="#"><img src={Libro2}  alt="" /></a></li>
            <li><a href="#"><img src={Libro3}  alt="" /></a></li>
            <li><a href="#"><img src={Libro4}  alt="" /></a></li>
            <li><a href="#"><img src={Libro6}  alt="" /></a></li>

        </div>
        

    );
}