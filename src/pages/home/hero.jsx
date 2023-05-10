import { Component } from "react";
import carImage from "../../asset/img/stockbit.svg";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="fade-left">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Investasi Saham dan Cripto Bersama Komunitas!</h1>
              <h3>
                BSB adalah aplikasi untuk kamu yang ingin berdiskusi, analisa
                dan investasi saham dalam satu tempat.
              </h3>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Mulai Berinvestasi
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={carImage} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
