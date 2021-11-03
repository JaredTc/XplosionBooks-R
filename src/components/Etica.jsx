import Libro1 from "../assets/destacado/Libro1.jpg";
import imagen1 from "../assets/comments/imagen1.jpg";
import imagen2 from "../assets/comments/imagen2.jpg";
import imagen4 from "../assets/comments/imagen4.jpg";

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
                <div className="comments">
                    <h1>Comments</h1>
                    <div className="row">
                        <div className="col ">
                            <div className="card ">
                                <div className="card-body comment">
                                    <img src={imagen1} alt="" />
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
                                    <img src={imagen1} alt="" />
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
        </div>
    );
};
