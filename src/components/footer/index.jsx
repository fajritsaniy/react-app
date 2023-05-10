import { Component } from "react";
import { YoutubeLogo, IgLogo, WaLogo, TwLogo } from "../../asset/img";

export default class Footer extends Component {
  render() {
    const socialMedia = [YoutubeLogo, IgLogo, WaLogo, TwLogo];
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-4 footer-contact">
                <h3>PT Belajar Saham Bersama</h3>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <p>About Us</p>
                <p>Contact</p>
                <p>Help</p>
                <p>Karir</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <p>House Rules</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Tata Kelola</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links ">
                <h4>Social Media</h4>
                <ul className="list-unstyled d-flex justify-content-between">
                  {socialMedia.map((e) => (
                    <li className="flex-fill">
                      <img src={e} alt="" srcset="" />
                    </li>
                  ))}
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-center text-light">
          <div className="d-flex align-items-center">
            <div className="mx-auto my-4">
              &copy; Copyright{" "}
              <strong>
                <span>Enigmacamp</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
