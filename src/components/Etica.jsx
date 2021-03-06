import Libro1 from "../assets/destacado/Libro1.jpg";
import {Comments} from './comments.jsx'

export const Etica = () => {
  return (
    <div className="container">
      <div className="card mb-3 p-4 context border-light ">
        <div className="row g-0">
          <div className="col-md-6 book">
            <img
              className="img-fluid shadow rounded-start"
              src={Libro1}
              width="220"
              alt=""
            />
          </div>
          <div className="col-md-5">
            <div className="card-body bd">
              <h1 className="card-title">Etica Para Celia</h1>
              <h5>by Ana de miguel</h5>
              <span>
                <i className="fas fa-star ps"></i>
                <i className="fas fa-star ps"></i>
                <i className="fas fa-star ps"></i>
                <i className="fas fa-star stars"></i>
                <i className="fas fa-star stars"></i>
              </span>
              <div className="price">
                <span className="pst">$21.95</span>
              </div>
              <div className="mt-2 ">
                <button className="btn btn-dark">Buy now</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, facilis. Fugit rem incidunt accusamus facere, ab
                facilis quas quo reprehenderit accusantium! Vero velit
                repudiandae unde nulla reprehenderit rem inventore in!
              </p>
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </div>
  );
};
