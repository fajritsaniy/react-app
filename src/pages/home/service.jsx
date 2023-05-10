import { Component } from "react";
import virtualTrading from "../../asset/img/clients/virtualTrading.png";

export default class Service extends Component {
  render() {
    return (
      <section id="services" className="services  ">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Belajar Dulu Dengan Virtual Trading</h2>
            <p>
              Kamu dapat berlatih dan menguji strategi investasi Anda tanpa
              resiko dengan uang virtual senilai 100 juta.
            </p>
          </div>

          <div className="row">
            <div className="col-xl-12 service-img">
              <img src={virtualTrading} className="img-fluid animated" alt="" />
            </div>
            <div className="col-xl-12">
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="mx-auto my-auto">
                  <a href="#">
                    <svg
                      className="svg-right-arrow fs-3 text bi bi-arrow-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                    <span>Selengkapnya</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
