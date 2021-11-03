
import imagen2 from "../assets/comments/imagen2.jpg";
import imagen4 from "../assets/comments/imagen4.jpg";

export const Comments = () =>{
    return <div className="container">
        <div className="comments">
          <h1>Comments</h1>
          <div className="row fila">
            <div className="col ">
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen2} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen2} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen4} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen2} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen2} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body comment">
                  <img src={imagen4} alt="" />
                  <div className="comentario">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur, voluptate cumque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
}