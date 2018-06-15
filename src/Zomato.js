import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class Upload extends Component {
  state = { selectedFile: {} };

  fileChangedHandler = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    let name = event.target.name
    reader.onloadend = () => {
      this.setState(prevState => ({
        selectedFile: {...prevState.selectedFile, [name]: [file,reader.result]},
      }));
    };
    reader.readAsDataURL(file);
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
  };

  render() {
    console.log(this.state, "state");
    return (
      <div className="row">
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px",
              backgroundImage: `url(${
                this.state.selectedFile[0] ? this.state.selectedFile[0][1] : ""
              })`
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="0"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px",
              backgroundImage: `url(${
                this.state.selectedFile[1] ? this.state.selectedFile[1][1] : ""
              })`
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="1"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px",
              backgroundImage: `url(${
                this.state.selectedFile[2] ? this.state.selectedFile[2][1] : ""
              })`
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="2"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px",
              backgroundImage: `url(${
                this.state.selectedFile[3] ? this.state.selectedFile[3][1] : ""
              })`
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="3"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
