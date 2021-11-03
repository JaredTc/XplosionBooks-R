import Libro4 from '../assets/destacado/Libro4.jpg'
import { Comments } from '../components/comments'

export const Ciao = () =>{
    return <div className="container">
    <div className="card mb-3 p-4 context border-light ">
      <div className="row g-0">
        <div className="col-md-6 book">
          <img
            className="img-fluid shadow rounded-start"
            src={Libro4}
            width="220"
            alt=""
          />
        </div>
        <div className="col-md-5">
          <div className="card-body bd">
            <h1 className="card-title">Ciao Bonita</h1>
            <h5>By Susana Rubio</h5>
            <span>
              <i className="fas fa-star ps"></i>
              <i className="fas fa-star ps"></i>
              <i className="fas fa-star ps"></i>
              <i className="fas fa-star ps"></i>
              <i className="fas fa-star stars"></i>
            </span>
            <div className="price">
              <span className="pst">$5.95</span>
            </div>
            <div className="mt-2 ">
              <button className="btn btn-dark">Buy now</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, facilis. Fugit rem incidunt accusamus facere, ab
              facilis quas quo reprehenderit accusantium! Vero velit
              repudiandae unde nulla reprehenderit rem inventore in!...
            </p>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  </div>

}