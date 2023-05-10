import { Component } from "react";
import {
  TelkomLogo,
  AdhiLogo,
  MandiriLogo,
  AceLogo,
  IndofoodLogo,
  UnileverLogo,
} from "../../asset/img/clients";

export default class StockProduct extends Component {
  render() {
    const brands = [
      {
        imageSrc: TelkomLogo,
        alt: "Telkom Logo",
      },
      {
        imageSrc: AdhiLogo,
        alt: "Adhi Logo",
      },
      {
        imageSrc: MandiriLogo,
        alt: "Mandiri Logo",
      },
      {
        imageSrc: AceLogo,
        alt: "Ace Logo",
      },
      {
        imageSrc: IndofoodLogo,
        alt: "Indofood Logo",
      },
      {
        imageSrc: UnileverLogo,
        alt: "Unilever Logo",
      },
    ];
    return (
      <section className="clients section-bg">
        <div className="container mb-3 mt-3" aos="fade-up">
          <div className="section-title">
            <h3>INVEST DI SAHAM TERNAMA. MILIKI BISNISNYA.</h3>
          </div>
          <div className="row">
            {brands.map((brand) => (
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src={brand.imageSrc}
                  className="img-fluid"
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
