import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ReactDOM from "react-dom";

export default class Upload extends Component {
  state = { selectedFile: {}, dragImage: "" };

  fileChangedHandler = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    let name = event.target.name;
    reader.onloadend = () => {
      this.setState(prevState => ({
        selectedFile: {
          ...prevState.selectedFile,
          [name]: [file, reader.result]
        }
      }));
    };
    reader.readAsDataURL(file);
  };

  onDragStart = event => {
    this.setState({
      dragImage: event.target.src
    });
  };

  onDrop = event => {
    event.target.src = this.state.dragImage
  };

  onDragOver = event => {
    event.preventDefault();
    console.log(event.target, "event");
  };
  render() {
    console.log(this.state, "state");
    return (
      <div className="row">
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="0"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                  draggable="true"
                  onDragStart={this.onDragStart}
                  src={
                    this.state.selectedFile[0]
                      ? this.state.selectedFile[0][1]
                      : ""
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="1"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                draggable="true"
                onDragStart={this.onDragStart}
                  src={
                    this.state.selectedFile[1]
                      ? this.state.selectedFile[1][1]
                      : ""
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="2"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                draggable="true"
                onDragStart={this.onDragStart}
                  src={
                    this.state.selectedFile[2]
                      ? this.state.selectedFile[2][1]
                      : ""
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card mx-2"
            style={{
              height: "300px"
            }}
          >
            <label className="btn btn-default" style={{ height: "300px" }}>
              <input
                name="3"
                type="file"
                onChange={this.fileChangedHandler}
                hidden
              />
              <div className="drag-text" style={{ height: "300px" }}>
                <img
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                draggable="true"
                onDragStart={this.onDragStart}
                  src={
                    this.state.selectedFile[3]
                      ? this.state.selectedFile[3][1]
                      : ""
                  }
                  style={{
                    height: "280px",
                    width: "100%"
                  }}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
