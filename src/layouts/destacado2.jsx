import libro5 from '../assets/destacado/Libro5.jpg'
import libro7 from '../assets/destacado/Libro7.jpg'
import libro8 from '../assets/destacado/Libro8.jpg'
import libro9 from '../assets/destacado/Libro9.jpg'
import libro10 from '../assets/destacado/Libro10.jpg'



export const DestadoPage = () =>{

    return(
        <div className="destacado2">
            <li><a href="/"><img src={libro5} alt="" /></a></li>
            <li><a href="/"><img src={libro7} alt="" /></a></li>
            <li><a href="/"><img src={libro8} alt="" /></a></li>
            <li><a href="/"><img src={libro9} alt="" /></a></li>
            <li><a href="/"><img src={libro10} alt="" /></a></li>


        </div>
    );

}