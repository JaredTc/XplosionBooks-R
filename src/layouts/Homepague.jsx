import Comic from "../assets/comic.png";
import { Destacado } from "./destacado";
import "../style/Homepage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="card mb-3 p-4 head border-light ">
        <div className="row g-0">
          <div className="col-md-6 img">
            <img
              className="img-fluid rounded-start"
              src={Comic}
              width="400"
              alt=""
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h1 className="card-title">Welcome To XplosionBooks</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, facilis. Fugit rem incidunt accusamus facere, ab
                facilis quas quo reprehenderit accusantium! Vero velit
                repudiandae unde nulla reprehenderit rem inventore in!
              </p>
              <div className="buton">
              <button className="btn ">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="des">
        <h2>New & Trending</h2>
      </div>
      <Destacado />
    </div>
  );
};
