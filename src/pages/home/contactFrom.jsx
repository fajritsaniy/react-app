import { Component } from "react";

export default class ContactFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hpNo: "",
      email: "",
      pesan: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, pesan, name, hpNo } = this.state;
    const isValid = email !== "" && pesan !== "" && name !== "" && hpNo !== "";
    this.props.onFormSubmit(isValid, this.state);
    this.setState({
      name: "",
      hpNo: "",
      email: "",
      pesan: "",
    });
  };

  render() {
    return (
      <>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            name="name"
            placeholder="Fajri Tsani"
            onChange={this.handleChange}
          />
          <label for="floatingInput">Full Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            name="hpNo"
            placeholder="6282XXXXXX"
            onChange={this.handleChange}
          />
          <label for="floatingInput">Handphone No</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            name="email"
            placeholder="name@example.com"
            onChange={this.handleChange}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            name="pesan"
            onChange={this.handleChange}
          ></textarea>
          <label for="floatingTextarea2">Pesan</label>
        </div>
        <button className="btn btn-success mt-3" onClick={this.handleSubmit}>
          Send Message
        </button>
      </>
    );
  }
}
