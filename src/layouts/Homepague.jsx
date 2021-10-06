import Comic from "../assets/comic.png";
import {Destacado} from './destacado'
import "../style/Homepage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="head">
        <div className="img">
          <img src={Comic} width="400" alt="" />
        </div>
        <div className="info">
          <h2>Welcome To XplosionBooks</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, facilis. Fugit rem incidunt accusamus facere, ab facilis
            quas quo reprehenderit accusantium! Vero velit repudiandae unde
            nulla reprehenderit rem inventore in!
          </p>
          <button className="btn  bt">Start</button>
        </div>
      </div>
      <div className="des">
                <h2>New & Trending</h2>
            </div>
      <Destacado />
    </div>
  );
};
