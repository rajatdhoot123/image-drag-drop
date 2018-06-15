import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class Upload extends Component {
  state = { files: {}, temp: null };


  onDrop(id, files) {
    if(files.length == 0){
        return
    }
    this.setState(prevState => ({
      files: { ...prevState.files, [id]: files[0] }
    }));
  }

  onDragEnter = (file,event) => {
    const dt = event.dataTransfer;
    if ( !(
        dt.types &&
        ( dt.types.indexOf ? dt.types.indexOf( "Files" ) !== -1 : dt.types.contains( "Files" ) )
    ) ) {
        this.setState( { isDragActive: false } );
    }
      console.log(file,"files",event,"event")
  }

  render() {
      console.log(this.state,"state")
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card mx-2" style={{ height: "300px" }}>
            <Dropzone
              onDragEnter={this.onDragEnter.bind(this,0)}
              accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
              multiple={false}
              onDrop={this.onDrop.bind(this, 0)}
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: this.state.files[0]
                  ? `url(${this.state.files[0].preview})`
                  : ""
              }}
            >
              {!this.state.files[0] && (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mx-2" style={{ height: "300px" }}>
            <Dropzone
              onDragEnter={this.onDragEnter.bind(this,1)}
              accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
              multiple={false}
              onDrop={this.onDrop.bind(this, 1)}
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: this.state.files[1]
                  ? `url(${this.state.files[1].preview})`
                  : ""
              }}
            >
              {!this.state.files[1] && (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mx-2" style={{ height: "300px" }}>
            <Dropzone
              onDragEnter={this.onDragEnter.bind(this,2)}
              accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
              multiple={false}
              onDrop={this.onDrop.bind(this, 2)}
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: this.state.files[2]
                  ? `url(${this.state.files[2].preview})`
                  : ""
              }}
            >
              {!this.state.files[2] && (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mx-2" style={{ height: "300px" }}>
            <Dropzone
              onDragEnter={this.onDragEnter.bind(this,3)}
              accept="image/jpeg,image/jpg,image/tiff,image/gif,image/png"
              multiple={false}
              onDrop={this.onDrop.bind(this, 3)}
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: this.state.files[3]
                  ? `url(${this.state.files[3].preview})`
                  : ""
              }}
            >
              {!this.state.files[3] && (
                <p>
                  Try dropping some files here, or click to select files to
                  upload.
                </p>
              )}
            </Dropzone>
          </div>
        </div>
        
      </div>
    );
  }
}
