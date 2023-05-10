import { Component } from "react";

export default class Modal extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="modal" tabindex="-1" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}
