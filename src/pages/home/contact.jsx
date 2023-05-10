import { Component } from "react";
import Modal from "../../components/modal";
import ContactFrom from "./contactFrom";

export default class Contact extends Component {
  state = {
    btnText: "Hubungi Sekarang",
    success: false,
    message: null,
  };

  handleFormSubmit = (isValid, state) => {
    if (isValid) {
      setTimeout(() => {
        this.setState({
          success: false,
          message: null,
        });
      }, 3000);
      this.setState({
        success: true,
        message: state,
      });
    } else {
      alert("Check your submission form");
    }
  };

  handleModalExit = () => {
    this.setState({
      success: false,
      message: null,
    });
    console.log(this.state.success);
  };
  render() {
    return (
      <>
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Ingin Menjadi Investor Saat Ini Juga ?</h3>
                <p>
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <button
                  className="cta-btn text-light align-middle"
                  href="#"
                  onClick={this.btnSend}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {this.state.btnText}
                </button>
              </div>
            </div>
          </div>
        </section>
        <Modal title="Submission Form">
          {this.state.success === true ? (
            `Terimakasih ${this.state.message.name}, pesan anda sudah kami terima.`
          ) : (
            <ContactFrom onFormSubmit={this.handleFormSubmit}></ContactFrom>
          )}
        </Modal>
      </>
    );
  }
}
